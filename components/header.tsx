import Link from "next/link";

export default function Header(){
  return(
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
  );
}