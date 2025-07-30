"use client";
import { Input } from "@/components/input/input";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateApp } from "@/redux/slices/app";
import { useRouter } from "next/navigation";
import { useDictionary } from "@/hooks/useDictionary";
import Skeleton from "react-loading-skeleton";
import { messages, submitFormSignup } from "./submitFormSignup";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentLang = useAppSelector((state) => state.app.lang);
  const { dict, loadingTranslate } = useDictionary("signup");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emptyField = Object.entries(values).find(
      ([_, val]) => val.trim() === ""
    );
    if (emptyField) {
      dispatch(
        updateApp({
          errorMessage: { text: "Please fill in all fields", type: "warning" },
        })
      );
      return;
    }

    if (values.password !== values.repeatPassword) {
      dispatch(
        updateApp({
          errorMessage: { text: "Passwords do not match", type: "warning" },
        })
      );
      return;
    }
    const status = await submitFormSignup(values);
    if (status === 200) router.push(`/${currentLang}/signin`);
    dispatch(
      updateApp({
        errorMessage: {
          text: dict[messages[status].text],
          type: messages[status].type,
        },
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Input
          type="text"
          title={dict?.firstName}
          loading={loadingTranslate}
          name="firstName"
          onChange={(value: string) =>
            setValues((prev) => ({ ...prev, firstName: value }))
          }
          className="flex-1"
        />
        <Input
          type="text"
          title={dict?.lastName}
          loading={loadingTranslate}
          name="lastName"
          onChange={(value: string) =>
            setValues((prev) => ({ ...prev, lastName: value }))
          }
          className="flex-1 mt-4 md:mt-0"
        />
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <Input
          type="password"
          title={dict?.password}
          loading={loadingTranslate}
          name="password"
          onChange={(value: string) =>
            setValues((prev) => ({ ...prev, password: value }))
          }
          className="flex-1"
        />
        <Input
          type="password"
          title={dict?.repeatPassword}
          loading={loadingTranslate}
          name="repeatPassword"
          onChange={(value: string) =>
            setValues((prev) => ({ ...prev, repeatPassword: value }))
          }
          className="flex-1 mt-4 md:mt-0"
        />
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

      <button type="submit" className="btn-submit">
        {loadingTranslate ? <Skeleton width="100px" /> : dict?.submitBtn}
      </button>
    </form>
  );
};

export default Signup;
