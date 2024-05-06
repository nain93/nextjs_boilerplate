import React, { useState } from "react";

import { Button } from "@material-tailwind/react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const handleLogin = async (loginProvider: "kakao" | "google") => {
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
          loading={loading}
          size="lg"
          className="w-80 flex justify-center bg-[#FAE54D] text-black hover:opacity-80 transition"
        >
          카카오 로그인
        </Button>
        <Button
          onClick={() => handleLogin("google")}
          loading={loading}
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
