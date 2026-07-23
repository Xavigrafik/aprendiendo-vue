import { computed, watchEffect } from "vue";
import { useQuery } from "@tanstack/vue-query";

import { getPokemons } from "../helpers/get-pokemons";
import { initialPokemons } from "../data/initial-pokemons";


export const usePokemons = () => {

    const { isLoading, data: pokemons, isError, error } = useQuery(
        ['pokemons'],
        getPokemons,
        {
            retry: 0,
            initialData: initialPokemons,
        }
    );

    watchEffect(() => {
        // console.log("isLoading:", isLoading.value);
        // console.log("isError:", isError.value);
        // console.log("error:", error.value);
    })

    return {
        // Properties
        pokemons,
        isLoading,
        isError,
        error,

        // Computed
        count: computed(() => pokemons.value?.length ?? 0),
    }
}