export default async function GetPokemon(){
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

  return await {
    name: 0,
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    type_1: '',
    type_2: '',
    image: 'missing image',
  };


  /*
    const elementColor = {
      bug: `#26de81`,
      dragon: `#ffeaa7`,
      electric: `#fed330`,
      fairy: `#ff0069`,
      fighting: `#30336b`,
      fire: `#f0932b`,
      flying: `#81ecec`,
      grass: `#00b894`,
      ground: `#efb549`,
      ghost: `#a55eea`,
      ice: `#74b9ff`,
      normal: `#95afc0`,
      poison: `#6c5ce7`,
      psychic: `#a29bfe`,
      rock: `#2d3436`,
      water: `#0190ff`
    };
  */
}