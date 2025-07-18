"use client";
import { Input } from "@/src/components/input/input";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/src/redux/hooks";
import { updateApp } from "@/src/redux/slices/app";
import "./page.scss";
import { useRouter } from "next/navigation";
import { submitFormLogin } from "./submitFormLogin";

const Signin = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const messages: { [key: number]: string } = {
    200: "login success",
    401: "invalid username | email",
    500: "server error",
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.email.length || !values.password.length)
      dispatch(updateApp({ errorMessage: "please fill fields" }));
    else {
      const status = await submitFormLogin(values.email, values.password);
      if (status === 200) router.push("/home");
      dispatch(updateApp({ errorMessage: messages[status] }));
      console.log(status, messages[status]);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-6">
        <h1 className="font-bold text-xl text-center">Sign in</h1>
        <p className="text-gray-500 text-[15px]">welcome!</p>
      </div>
      <Input
        type="email"
        title="Email"
        name="email"
        onChange={(value: string) =>
          setValues((prev) => ({ ...prev, email: value }))
        }
      />
      <Input
        type="password"
        title="Password"
        name="password"
        onChange={(value: string) =>
          setValues((prev) => ({ ...prev, password: value }))
        }
      />
      <button type="submit">sign in</button>
    </form>
  );
};
export default Signin;
