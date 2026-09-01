import type { State } from "./state.js";

export async function commandCatch(
  state: State,
  pokemonName: string,
): Promise<void> {
  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const pokemon = await state.pokeapi.fetchPokemon(pokemonName);

  const catchChance = 1 - pokemon.base_experience / 500;

  if (Math.random() < catchChance) {
    console.log(`${pokemonName} was caught!`);
    state.pokedex[pokemonName] = pokemon;
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}
