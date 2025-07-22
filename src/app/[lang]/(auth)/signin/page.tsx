"use client";
import { Input } from "@/components/input/input";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateApp } from "@/redux/slices/app";
import { useRouter } from "next/navigation";
import { messages, submitFormLogin } from "./submitFormLogin";
import { useDictionary } from "@/hooks/useDictionary";
import Skeleton from "react-loading-skeleton";
import "./page.scss";

const Signin = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentLang = useAppSelector((state) => state.app.lang);
  const { dict, loadingTranslate } = useDictionary(currentLang, "signin");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.email.length || !values.password.length)
      dispatch(
        updateApp({
          errorMessage: { text: "Please fill in the fields", type: "warning" },
        })
      );
    else {
      const status = await submitFormLogin(values.email, values.password);
      if (status === 200) router.push(`/${currentLang}/home`);
      dispatch(
        updateApp({
          errorMessage: {
            text: messages[status].text,
            type: messages[status].type,
          },
        })
      );
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-6">
        {loadingTranslate ? (
          <Skeleton width="100px" count={2} />
        ) : (
          <>
            <h1 className="font-bold text-xl text-center">{dict.signin}</h1>
            <p className="text-gray-500 text-[15px]">{dict.welcome}</p>
          </>
        )}
      </div>
      <Input
        type="email"
        title={dict?.email}
        loading={loadingTranslate}
        name="email"
        onChange={(value: string) =>
          setValues((prev) => ({ ...prev, email: value }))
        }
      />
      <Input
        type="password"
        title={dict?.password}
        loading={loadingTranslate}
        name="password"
        onChange={(value: string) =>
          setValues((prev) => ({ ...prev, password: value }))
        }
      />
      <button type="submit">
        {loadingTranslate ? <Skeleton width="100px" /> : dict.captionBtn}
      </button>
    </form>
  );
};
export default Signin;
