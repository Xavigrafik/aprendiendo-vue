<script setup>
import { onMounted, onUnmounted } from "vue";

import { useMovieStore } from "../stores/movieStore";
const movieStore = useMovieStore();


</script>

<template>
    <ul class="movies">
        <li v-for="movie in movieStore.movies" :key="movie.title" class="movie">
            <h2>
                <router-link :to="{ name: 'movie-details', params: { identifier: movie.id } }">
                    {{ movie.id }}. {{ movie.title }} 
                </router-link>
            </h2>
            <p>Duration: {{ movie.duration }}</p>
            <p>Director: {{ movie.director }}</p>
        </li>
    </ul>
</template>

<style >
    .movies {
        margin: 20px auto;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);

    }
    
.movie {
	background: var(--bg-secondary);
	border-radius: 16px;
	padding: 24px;
	box-shadow: var(--shadow-md);
	border: 1px solid var(--border-color);
	transition: var(--transition);
	animation: slideUp 0.6s ease-out backwards;
}
</style>
