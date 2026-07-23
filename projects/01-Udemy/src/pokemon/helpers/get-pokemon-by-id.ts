import axios from 'axios';
import pokemonApi from '../api/pokemonApi';
import type { Pokemon, PokemonResponse } from '../interfaces';
import { sleep } from './sleep';

export const getPokemonById = async(id: string): Promise<Pokemon> => {

    //   await sleep(2);
    // throw new Error('Error de prueba : 6587465');

  const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${id}`);

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default,
  };

  return pokemon;
}