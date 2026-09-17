export interface Crypto{
  name: string
  price: number
  change_24h: number
  volume_24h: number
  market_cap: number
}

export async function GetCryptoInfo(id: string, currency: string): Promise<Crypto>{
  try{
    const api = await fetch(`https://api.coinpaprika.com/v1/tickers/${id}?quotes=${currency}`);
    const data = await api.json();
    return{
      name: data.name,
      price: data.quotes?.[currency]?.price,
      change_24h: data.quotes?.[currency]?.percent_change_24h,
      volume_24h: data.quotes?.[currency]?.volume_24h,
      market_cap: data.quotes?.[currency]?.market_cap,
    }
  }
  catch(error){
    console.error("Something went wrong during catching data: ", error);
  }

  return{
    name: 'unknown',
    price: 0,
    change_24h: 0,
    volume_24h: 0,
    market_cap: 0
  }

}