<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router"; 
import { useMovieStore } from "../stores/movie";
import Button from "../components/Button.vue";

// El router inyecta 'title' porque así lo definimos en el path ':title'
const props = defineProps({
    title: String 
});

const route = useRoute();
const movieStore = useMovieStore();

const movie = computed(() => {
    // Buscamos por el título que viene de la prop o de la URL
    const searchTitle = props.title || route.params.title;
    return movieStore.movies.find(m => m.title === searchTitle);
});
</script>

<template>
    <div class="movie-detail-wrapper">

        <div v-if="movie" class="movie-card-selected">
            <h1>{{ movie.title }}</h1>
            <div class="details">
                <p><strong>Director:</strong> {{ movie.director }}</p>
                <p><strong>Duración:</strong> {{ movie.duration }} min</p>
            </div>

            <Button variant="outline" to="/movies">
              ←  Volver a la lista
            </Button>
        </div>
        
        <div v-else class="error-state">
            <h2>Película no encontrada</h2>
            <p>Buscando: {{ props.title || route.params.title }}</p>

            <Button variant="outline" to="/movies">
              ←  Volver a la lista
            </Button>
        </div>


    </div>
</template>

<style scoped>
.movie-detail-wrapper {
    max-width: 600px;
    margin: 40px auto;
    font-family: sans-serif;
}
.movie-card-selected {
    padding: 2rem;
    border: 2px solid #42b883;
    border-radius: 12px;
    background: #f8f9fa;
}
.error-state {
    color: red;
    text-align: center;
    background-color: #fff;
    padding: 1em;
    border: var(--border-color);
}
</style>