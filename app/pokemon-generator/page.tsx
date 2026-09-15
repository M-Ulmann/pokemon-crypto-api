"use client"

import Header from "@/components/header";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Pikachu from "@/public/pikachu.png"

export default function PokemonGenerator(){

  const [isDark, setIsDark] = useState(false);

  return(
    <div className={clsx("transition min-h-dvh", isDark ? "bg-slate-800 text-white" : "bg-white text-black")}>
      
      <Header isDark={isDark} setIsDark={setIsDark}/>
      
      <main className="flex flex-col items-center mt-10 gap-10">

        <section className="flex flex-col items-center overflow-hidden sm:min-w-125 sm:max-w-125 min-w-11/12 relative px-5 py-10 gap-7 rounded-2xl shadow-[2px_5px_10px_5px_rgba(0,0,0,0.25)]">   

          <div className="absolute bg-yellow-500 w-130 h-120 -top-50 rounded-full z-0"></div>

          <p className="bg-white rounded-4xl self-end px-6 py-2 text-xl z-10 text-black">
            <span className=" uppercase text-sm font-bold">hp</span> 46        
          </p>

          <Image
            src={Pikachu}
            width={250}
            height={250}
            alt="pika pika"
            className="z-10"
          />

          <p className=" capitalize text-4xl text-center font-bold">
            pikachu
          </p>
          
          <div className="flex flex-row flex-wrap gap-20 font-bold text-white">

            <p className="bg-yellow-500 rounded-3xl px-5 py-1">poison</p>

            <p className="bg-yellow-500 rounded-3xl px-5 py-1">normal</p>

          </div>

          <div className="flex flex-row sm:gap-20 text-xl tracking-[2px] gap-6">

            <div className="flex flex-col items-center">
              <p className="font-bold text-2xl text-yellow-500">70</p>
              <p>Attack</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold text-2xl text-yellow-500">120</p>
              <p>defense</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold text-2xl text-yellow-500">52</p>
              <p>speed</p>
            </div>

          </div>

        </section>

        <button className="bg-black text-white outline-4 outline-black px-10 py-5 text-3xl rounded-lg hover:bg-white hover:text-black active:bg-gray-300 transition duration-300">
          Generate
        </button>

      </main>

    </div>
  );
}