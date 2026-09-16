"use client"

import Header from "@/components/header";
import { useState } from "react";
import clsx from "clsx";
import Pikachu from "@/public/pikachu.png"
import Image from "next/image";

export default function CryptoDashboard(){

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={clsx("transition", isDark ? "bg-slate-800 text-white" : "bg-white text-black")}>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      
      <main>
        <header className="flex flex-row items-center h-25 bg-gray-400 text-white px-10 justify-between">
          <div className="flex flex-row items-center gap-5">
            <Image
              src={Pikachu}
              width={50}
              height={50}
              alt="crypto"
            />
            <p className="text-2xl capitalize">
              crypto dashboard
            </p>
          </div>

          <div className="flex flex-row gap-5 text-xl">
            <p className="capitalize tracking-[3px]">
              select your currency:
            </p>

            <select className="bg-gray-400"
              name="currency" id="currency"
            >
              <option value="CZK" className="">CZK</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>

        </header>

        <section>
          <h2>market overview</h2>
          <div>
            <div>
              <h3>total market cap</h3>
              <p>$2.42 T</p>
            </div>

            <div>
              <h3>24h global volume</h3>
              <p>$84.2 B</p>
            </div>

            <div>
              <h3>market leader</h3>
              <p>Bitcoin</p>
            </div>
          </div>
        </section>

        <section>
          <h2>live prices</h2>
          <table>
            <thead>
              <td>#</td>
              <td>assets</td>
              <td>price</td>
              <td>24h change</td>
              <td>24h volume</td>
              <td>market cap</td>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Bitcoin</td>
                <td>$45612</td>
                <td>+ 0.10%</td>
                <td>$80.40 B</td>
                <td>$1.26T</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}