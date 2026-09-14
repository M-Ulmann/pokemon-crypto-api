import Link from "next/link";

export default function Home(){
  return(
    <>
      <header>
        <Link href={'/'}>
          Home        
        </Link>

        <Link href={'/pokemon-generator'}>
          Pokemon Generator
        </Link>

        <Link href={'/crypto-dashboard'}>
          Crypto Dashboard
        </Link>
      </header>

      <main>
        <h1>Pick an API project</h1>
        
        <Link href={'/pokemon-generator'}>
          obrazek here
        </Link>

        <Link href={'/crypto-dashboard'}>
          obrazek here
        </Link>
      </main>
    </>
  );
}