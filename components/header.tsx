import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

export default function Header({isDark, setIsDark}: {
  isDark: boolean,
  setIsDark: Dispatch<SetStateAction<boolean>>
}){
  return(
    <header className={clsx("flex flex-row flex-wrap items-center w-full h-20 text-center gap-5 px-5 justify-between text-lg sm:flex-nowrap sm:px-10 sm:text-2xl sm:gap-20 sm:justify-normal sm:-translate-y-15 sm:hover:translate-0 sm:transition",
      isDark ? "bg-lime-700 text-white" : "bg-lime-300 text-black"
    )}>
      <Link href={'/'} className="underline decoration-0 underline-offset-10 hover:decoration-4 transition-all duration-100">
        Home        
      </Link>

      <Link href={'/pokemon-generator'} className="underline decoration-0 underline-offset-10 hover:decoration-4 transition-all duration-100">
        Pokemon Generator
      </Link>

      <Link href={'/crypto-dashboard'} className="underline decoration-0 underline-offset-10 hover:decoration-4 transition-all duration-100">
        Crypto Dashboard
      </Link>

      <button className=" ml-auto hover:outline-2 px-5 py-2 rounded-xl"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {
          isDark ? "Light Mode" : "Dark Mode"
        }
      </button>
    </header>
  );
}