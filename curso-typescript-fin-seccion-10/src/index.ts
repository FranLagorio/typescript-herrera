import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = 'Pikachu'

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
charmander.publicApi = "https://fernando-herrera.com";
console.log(charmander);

// import { getPokemon } from "./generics/getPokemons";

// getPokemon(1)
//   .then((pokemon) => console.log(pokemon.name))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("final");
//   });

// import { Hero } from './classes/Hero';
// import { Hero as SuperHero, Hero2 } from './classes/Hero';
// /import * as HeroClasses from './classes/Hero';

// const ironman = new SuperHero('Ironman', 1, 55);
// const ironman = new Hero('Ironman', 10, 55);

// console.log( ironman );
// console.log( ironman.power );
