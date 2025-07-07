'use client'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../redux/store'
import { updateScreen } from '../redux/slices/screen'
import { getLanguage } from '@/components/server/language'
import { resetApp, updateApp } from '../redux/slices/app'
import { usePathname, useRouter } from 'next/navigation'
import { resetProfile } from "../redux/slices/profile";
import { resetForm } from "../redux/slices/form";
import { infoLang } from '@/helpers/language'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>(undefined);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(()=> {
    const setBreakpoint = () => {
        storeRef.current.dispatch(updateScreen({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        }))
    };
    let timeoutId: NodeJS.Timeout;
    const debouncedSetBreakpoint = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(setBreakpoint, 200);
    };
    window.addEventListener("resize", debouncedSetBreakpoint);
    setBreakpoint();

    const locale = storeRef.current.getState().app.locale;
    
    getLanguage().then((localeResponse) => {
      const targetLocale = locale !== localeResponse ? localeResponse : locale;
      const direction = infoLang[targetLocale]?.dir ?? "ltr";

      const updatePayload =
        locale !== localeResponse
          ? { locale: localeResponse, direction }
          : { direction };

      storeRef.current.dispatch(updateApp(updatePayload));
    });
    
    storeRef.current.dispatch(updateApp({ urlSegments: pathname.split("/") }))

    return () => {
        window.removeEventListener("resize", debouncedSetBreakpoint);
    };
  }, []);

  useEffect(() => {
    const changeStates = () => {
      const infoProfile = storeRef.current.getState().profile.info;
      const dataApp = storeRef.current.getState().app.data;
      const inputForm = storeRef.current.getState().form.inputValue;
      if(dataApp || infoProfile)
        storeRef.current.dispatch(resetApp());

      storeRef.current.dispatch(updateApp({ urlSegments: pathname.split("/"),  errorMessage: null }));

      if (infoProfile)
        storeRef.current.dispatch(resetProfile());
      if (inputForm)
        storeRef.current.dispatch(resetForm());
    }
    changeStates();
  }, [pathname]);

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
