<script setup lang="ts">

    import { useRoute } from 'vue-router';
    import { usePokemon } from '../composables/usePokemon';

    const route = useRoute();

    const pokemonId = String(route.params.id ?? '');

    const { isLoading, isError, pokemon, error } = usePokemon(pokemonId);

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-else-if="isError">{{ error }}</h1>

    <div v-else-if="pokemon">
        <h1>{{ pokemon.name }}</h1>
        <div class="character-container">
            <img :src="pokemon.frontSprite" :alt="pokemon.name">
        </div>
    </div>
    <button type="button" @click="() => $router.back()">Back</button>
</template>


<style scoped>
    .character-container {
        display: flex;
        flex-direction: row;
    }

    img {
        width: 150px;
        border-radius: 5px;
    }

</style>