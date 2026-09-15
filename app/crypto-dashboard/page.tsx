"use client"

import Header from "@/components/header";
import { useState } from "react";
import clsx from "clsx";

export default function CryptoDashboard(){

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={clsx("transition", isDark ? "bg-slate-800 text-white" : "bg-white text-black")}>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      
      <main>

      </main>
    </div>
  );
}