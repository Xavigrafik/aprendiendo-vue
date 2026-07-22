<script setup lang="ts">

    import pokemonApi from "../api/pokemonApi.ts";
import { getPokemons } from "../helpers/get-pokemons.ts";
    import type { PokemonListResponse } from "../interfaces/pokemon-list.response.ts";

    getPokemons().then(data => console.log(data));

    // pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')
    //   .then((response) => {
    //     console.log(response.data);
    //     const firstPokemonName = response.data?.results?.[0]?.name ?? 'N/A';
    //     console.log(firstPokemonName);
    //   })
    //     .catch(error => {
    //         console.error('Error fetching Pokemon:', error);
    //     });
</script>

<template>
  <div>
    <h1>Pokemon List</h1>
  </div>
</template>

<style scoped></style>
