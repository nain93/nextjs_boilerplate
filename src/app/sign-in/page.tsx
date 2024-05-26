"use client";

import { Button } from "@material-tailwind/react";
import { LoginProvider } from "@/utils/type";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState<LoginProvider | null>(null);
  const handleLogin = async (loginProvider: LoginProvider) => {
    setProvider(loginProvider);
    try {
      setLoading(true);
      await signIn(loginProvider, {
        redirect: true,
        callbackUrl: "/",
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 flex flex-col items-center h-svh justify-evenly">
      <h1 className="text-4xl">NextJs Boilerplate</h1>
      <div className="flex flex-col">
        <Button
          onClick={() => handleLogin("kakao")}
          loading={loading && provider === "kakao"}
          size="lg"
          className="w-80 flex justify-center bg-[#FAE54D] text-black hover:opacity-80 transition"
        >
          카카오 로그인
        </Button>
        <Button
          onClick={() => handleLogin("google")}
          loading={loading && provider === "google"}
          size="lg"
          color="white"
          className="w-80 flex justify-center hover:opacity-80 transition mt-4"
        >
          구글 로그인
        </Button>
      </div>
    </div>
  );
}
