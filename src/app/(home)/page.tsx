"use client";

import { Button } from "@material-tailwind/react";
import React from "react";

export default function Home() {
  return (
    <div className="py-10 flex flex-col items-center h-svh justify-evenly">
      <h1 className="text-4xl">NextJs Boilerplate</h1>
      <div className="flex flex-col">
        <Button
          size="lg"
          // loading={true}
          className="w-80 flex justify-center bg-[#FAE54D] text-black hover:opacity-80 transition"
        >
          카카오 로그인
        </Button>
        <Button
          color="white"
          size="lg"
          className="w-80 flex justify-center hover:opacity-80 transition mt-4"
        >
          구글 로그인
        </Button>
      </div>
    </div>
  );
}
