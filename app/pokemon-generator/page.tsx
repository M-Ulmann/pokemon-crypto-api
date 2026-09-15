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
      
      <main>

        <section>   

          <div></div>

          <p>
            <span>hp</span> 46        
          </p>

          <Image
            src={Pikachu}
            width={100}
            height={100}
            alt="pika pika"
          />

          <p>
            pikachu
          </p>
          
          <div>

            <p>poison</p>

            <p>normal</p>

          </div>

          <div>

            <div>
              <p>70</p>
              <p>Attack</p>
            </div>

            <div>
              <p>120</p>
              <p>defense</p>
            </div>

            <div>
              <p>52</p>
              <p>speed</p>
            </div>

          </div>

        </section>

        <button>
          Generate
        </button>

      </main>

    </div>
  );
}