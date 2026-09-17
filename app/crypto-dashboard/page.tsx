"use client"

import Header from "@/components/header";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Pikachu from "@/public/pikachu.png"
import Image from "next/image";
import Link from "next/link";
import { GetCryptoInfo } from "@/lib/crypto";
import {Crypto} from "@/lib/crypto";
import { cryptoList } from "@/lib/cryptoList";

export default function GetCryptoDashboard(){

  const [isDark, setIsDark] = useState(false);
  const [cryptoInfo, setCryptoInfo] = useState<Crypto[]>([]);
  const [currency, setCurrency] = useState('CZK');

  useEffect(() => {
    
    const getAllCryptos = async () => {
      const loadCrypto = cryptoList.map((id) => GetCryptoInfo(id, currency))
      const result = await Promise.all(loadCrypto);
      setCryptoInfo(result);
    }

    getAllCryptos();

  }, [currency])

  return (
    <div className={clsx("transition min-h-dvh", isDark ? "bg-slate-800 text-white" : "bg-white text-black")}>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      
      <main>
        <header className={clsx("flex flex-row items-center h-25 bg-gray-400 text-white px-2 justify-between gap-10 sm:px-10",
          isDark ? "bg-gray-600" : "bg-gray-400"
        )}>
          <div className="flex flex-row items-center gap-5">
            <Link href={'/crypto-dashboard'} className="shrink-0">
              <Image
                src={Pikachu}
                width={60}
                height={60}
                alt="crypto"
              />
            </Link>
            
            <p className="text-xl capitalize font-bold tracking-wider sm:text-2xl">
              crypto dashboard
            </p>
          </div>

          <div className="flex flex-row gap-5 text-xl items-center">
            <p className="capitalize tracking-[3px] hidden sm:inline">
              select your currency:
            </p>

            <select className="bg-gray-500 px-5 py-3 cursor-pointer rounded-lg hover:opacity-70"
              name="currency" id="currency"
              value={currency}
              onChange={(event) => {
                setCurrency(event.target.value);
              }}
            >
              <option value="CZK">CZK</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>

        </header>

        <section className="flex flex-col gap-5 mx-10 my-10 lg:mx-20 ">
          <h2 className="capitalize text-3xl tracking-[3px]">
            market overview
          </h2>
          <div className="grid grid-cols-1 py-5 gap-4 xl:gap-7 md:grid-cols-3">
            <div className="px-7 py-5 outline-2 outline-dashed">
              <h3 className="capitalize text-xl text-center md:text-left">
                total market cap
              </h3>
              <p className="text-lg font-bold text-center md:text-left">
                $2.42 T
              </p>
            </div>

            <div className="px-7 py-5 outline-2 outline-dashed">
              <h3 className="capitalize text-xl text-center md:text-left">
                24h global volume
              </h3>
              <p className="text-lg font-bold text-center md:text-left">
                $84.2 B
              </p>
            </div>

            <div className="px-7 py-5 outline-2 outline-dashed">
              <h3 className="capitalize text-xl text-center md:text-left">
                market leader
              </h3>
              <p className="text-lg font-bold text-center text-yellow-600 md:text-left">
                Bitcoin
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5 mx-10 my-10 lg:mx-20 ">
          <h2 className="capitalize text-3xl tracking-[3px]">
            live prices
          </h2>
          <table className="crypto-table text-left outline-2 outline-dashed">
            <thead className="text-xl border-b-3 border-dashed border-emerald-600">
              <tr>
                <th>
                  <button>
                    #
                  </button>
                </th>
                <th>
                  <button>
                    asset
                  </button>
                </th>
                <th>
                  <button>
                    price
                  </button>
                </th>
                <th>
                  <button>
                    24h change
                  </button>
                </th>
                <th className="hidden sm:table-cell">
                  <button>
                    24h volume
                  </button>
                </th>
                <th className="hidden sm:table-cell">
                  <button>
                    market cap
                  </button>
                </th>
              </tr>
            </thead>

            <tbody className="text-lg">
              {cryptoInfo.map((crypto,index) => 
                <tr key={index || crypto.name}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {crypto?.name}
                  </td>
                  <td>
                    ${crypto?.price}
                  </td>
                  <td>
                    {crypto?.change_24h}
                  </td>
                  <td className="hidden sm:table-cell">
                    ${crypto?.volume_24h}
                  </td>
                  <td className="hidden sm:table-cell">
                    ${crypto?.market_cap}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}