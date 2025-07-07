"use client";
import { Input } from "@/src/components/input/input";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/src/redux/hooks";
import { updateApp } from "@/src/redux/slices/app";
import "./page.scss";

const Signin = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.email.length || !values.password.length)
      dispatch(updateApp({ errorMessage: "please fill fields" }));
  };

  return (
    <form className="section-auth px-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-6">
        <h1 className="font-bold text-xl">Sign in</h1>
        <p className="text-gray-500 text-[15px]">please sign in to continue</p>
      </div>
      <Input
        type="email"
        title="Email"
        id="email"
        onChange={(value: string) =>
          setValues((prev) => ({ ...prev, email: value }))
        }
      />
      <Input
        type="password"
        title="Password"
        id="password"
        onChange={(value: string) =>
          setValues((prev) => ({ ...prev, password: value }))
        }
      />
      <button type="submit">sign in</button>
      <Link
        href="en/forgetpass"
        className="mt-3 text-[#b229ff] text-end text-[15px]"
      >
        Forget Password?
      </Link>
      <Link href="en/signup" className="mt-3 text-end text-[15px]">
        sign up
      </Link>
    </form>
  );
};
export default Signin;
