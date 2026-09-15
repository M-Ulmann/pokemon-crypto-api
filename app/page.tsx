"use client"

import Link from "next/link";
import Image from "next/image";
import Pikachu from "@/public/pikachu.png"
import Bitcoin from "@/public/bitcoin.png"
import Header from "@/components/header";
import { useState } from "react";
import clsx from "clsx";

export default function Home(){

  const [isDark, setIsDark] = useState(false);

  return(
    <div className={clsx("transition", isDark ? "bg-slate-800 text-white" : "bg-white text-black")}>

      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className="flex flex-col items-center justify-start gap-10 mt-20 min-h-[90dvh]">
        <h1 className="text-5xl font-bold tracking-[8px] text-center px-3">
          Pick an API project
        </h1>
        
        <div className="grid grid-cols-2 gap-10 text-center max-w-11/12 sm:max-w-1/2">
          <Link href={'/pokemon-generator'}
            className={clsx("rounded-2xl p-1 sm:p-5 flex flex-col items-center transition-all gap-5",
              isDark ? "hover:shadow-[0px_0px_10px_4px_rgba(255,255,255,0.25)]" : "hover:shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)]"
            )}
          >
            <Image 
              src={Pikachu} 
              width={100}
              height={100}
              alt="pikachu img"
            />
            <div className="">

              <h2 className="text-3xl font-bold">
                Pokemon Generator
              </h2>
              <p className="text-lg">
                If you need to pick a pokemon randomly, here is the site for you!
              </p>

            </div>

          </Link>

          <Link href={'/crypto-dashboard'}
            className={clsx("rounded-2xl p-1 sm:p-5 flex flex-col items-center transition-all gap-5",
              isDark ? "hover:shadow-[0px_0px_10px_4px_rgba(255,255,255,0.25)]" : "hover:shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)]"
            )}
          >
            <Image 
              src={Bitcoin} 
              width={100}
              height={100}
              alt="pikachu img" 
            />

            <div>

              <h2 className="text-3xl font-bold">
                Crypto Dashboard 
              </h2>
              <p className="text-lg">
                Check the latest statistics for cryptocurrencies here!
              </p>

            </div>

          </Link>
        </div>
      </main>
    </div>
  );
}