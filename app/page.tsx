import Link from "next/link";
import Image from "next/image";
import Pikachu from "@/public/pikachu.png"
import Bitcoin from "@/public/bitcoin.png"

//NA PRISTE DODELAT OBRAZKY A RAMECKY OBRAZKU

export default function Home(){
  return(
    <>
      <header className="flex flex-row items-center w-full bg-lime-300 h-20 text-center gap-5 px-5 justify-between text-lg sm:px-10 sm:text-2xl sm:gap-20 sm:justify-normal sm:-translate-y-15 sm:hover:translate-0 sm:transition">
        <Link href={'/'} className="">
          Home        
        </Link>

        <Link href={'/pokemon-generator'} className="">
          Pokemon Generator
        </Link>

        <Link href={'/crypto-dashboard'}>
          Crypto Dashboard
        </Link>

        <button className=" ml-auto">
          Light Mode
        </button>
      </header>

      <main className="flex flex-col items-center h-96 justify-center tracking-[8px]">
        <h1 className="text-5xl font-bold">
          Pick an API project
        </h1>
        
        <div className="flex flex-row gap-10">
          <Link href={'/pokemon-generator'}>
            <Image 
              src={Pikachu} 
              width={50}
              height={50}
              alt="pikachu img" 
            />
          </Link>

          <Link href={'/crypto-dashboard'}>
          <Image 
              src={Bitcoin} 
              width={50}
              height={50}
              alt="pikachu img" 
            />
          </Link>
        </div>
      </main>
    </>
  );
}