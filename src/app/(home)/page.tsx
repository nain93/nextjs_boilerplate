"use client";

import { Button } from "@material-tailwind/react";
import React from "react";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="py-10 flex flex-col items-center h-svh justify-evenly">
      <h1>HOME</h1>
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: "/sign-in",
          })
        }
        size="lg"
        color="white"
        className="w-80 flex justify-center hover:opacity-80 transition mt-4"
      >
        로그아웃
      </Button>
    </div>
  );
}
