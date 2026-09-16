export interface pokeData {
  name: string
  hp: number
  attack: number
  defense: number
  speed: number
  type_1: string
  type_2: string
  image: string
}

export default async function GetPokemon(): Promise<pokeData>{
  const RNG = Math.floor(Math.random() * 1351);

  let pokemonURL = '';

  try{
    const randomApi = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    const randomData = await randomApi.json();
    pokemonURL = randomData.results[RNG].url;
  }
  catch(error){
    console.log("Error while generating pokemon: ", error)
  }

  try{
    const api = await fetch(pokemonURL);
    const data = await api.json();
    return await {
      name: data.name,
      hp: data.stats[0]?.base_stat,
      attack: data.stats[1]?.base_stat,
      defense: data.stats[2]?.base_stat,
      speed: data.stats[5]?.base_stat,
      type_1: data.types[0]?.type?.name,
      type_2: data.types[1]?.type?.name,
      image: data.sprites?.front_default,
    };
  }
  catch(error){
    console.log("Error while fetching a pokemon: ", error)
  }

  return {
    name: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    type_1: '',
    type_2: '',
    image: 'missing image',
  };
}