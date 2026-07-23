import { computed,watchEffect } from "vue";
import { useQuery } from "@tanstack/vue-query";

import { getPokemonById } from "@/pokemon/helpers/get-pokemon-by-id";

export const usePokemon = (id: string) => {

    const { isLoading, isError, data: pokemon, error } = useQuery(
        ['pokemon', id],
        () => getPokemonById(id)
    );

    watchEffect(() => {
        // console.log("isLoading:", isLoading.value);
        // console.log("isError:", isError.value);
        // console.log("error:", error.value);
    })

    return {
        // Properties
        pokemon,
        isLoading,
        isError,
        error,
    };
};