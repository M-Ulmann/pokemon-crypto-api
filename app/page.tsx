import Link from "next/link";
import Image from "next/image";
import Pikachu from "@/public/pikachu.png"
import Bitcoin from "@/public/bitcoin.png"

//NA PRISTE DODELAT OBRAZKY A RAMECKY OBRAZKU

export default function Home(){
  return(
    <>
      <header className="flex flex-row flex-wrap items-center w-full bg-lime-300 h-20 text-center gap-5 px-5 justify-between text-lg sm:flex-nowrap sm:px-10 sm:text-2xl sm:gap-20 sm:justify-normal sm:-translate-y-15 sm:hover:translate-0 sm:transition">
        <Link href={'/'} className="underline decoration-0 underline-offset-10 hover:decoration-4 transition-all duration-100">
          Home        
        </Link>

        <Link href={'/pokemon-generator'} className="underline decoration-0 underline-offset-10 hover:decoration-4 transition-all duration-100">
          Pokemon Generator
        </Link>

        <Link href={'/crypto-dashboard'} className="underline decoration-0 underline-offset-10 hover:decoration-4 transition-all duration-100">
          Crypto Dashboard
        </Link>

        <button className=" ml-auto hover:outline-2 px-5 py-2 rounded-xl">
          Light Mode
        </button>
      </header>

      <main className="flex flex-col items-center justify-start gap-10 mt-20">
        <h1 className="text-5xl font-bold tracking-[8px] text-center px-3">
          Pick an API project
        </h1>
        
        <div className="grid grid-cols-2 gap-10 text-center max-w-11/12 sm:max-w-1/2">
          <Link href={'/pokemon-generator'}
            className="rounded-2xl hover:shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)] p-1 sm:p-5 flex flex-col items-center transition-all gap-5"
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
            className="rounded-2xl hover:shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)] p-1 sm:p-5 flex flex-col items-center transition-all gap-5"
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
    </>
  );
}