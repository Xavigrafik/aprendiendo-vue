<script setup lang="ts">
    import type { Pokemon } from '../interfaces/pokemon';

    interface Props {
    pokemon: Pokemon;
    }


    defineProps<Props>();


</script>

<template>
    <div class="pokemon-card">
        <img :src="pokemon.frontSprite" :alt="pokemon.name">
        <h3>{{ pokemon.name }}</h3>
    </div>
</template>


<style scoped>
    .pokemon-card {
        margin-right: 5px;
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1.2rem;
        cursor: pointer;

        h3 {
            text-transform: capitalize;
            font-size: 0.875rem;
        }
    }
    
    img {
        border: 2px solid rgba(0, 0, 0, 0.15);
        width: 100px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    img:hover {
        border: 2px solid rgba(0, 0, 0, 0.33);
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0px 20px 20px -8px rgba(0, 0, 0, 0.35);
    }
</style>