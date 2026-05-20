<script setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { useMovieStore } from "../stores/movieStore";
    import Button from "../components/Button.vue";

    // Capturamos el parámetro comodín de la URL
    const props = defineProps({
        identifier: String
    });

    const route = useRoute();
    const movieStore = useMovieStore();

    const movie = computed(() => movieStore.getMovie(props.identifier));

</script>

<template>
    <div class="movie-detail-wrapper">

        <div v-if="movie" class="movie-card-selected">
            <h1>{{ movie.title }} ({{ movie.id }})</h1>
            <div class="details">
                <p><strong>Director:</strong> {{ movie.director }}</p>
                <p><strong>Duración:</strong> {{ movie.duration }} min</p>
            </div>

            <Button variant="outline" to="/movies">
                ← Volver a la lista
            </Button>
        </div>

        <div v-else class="error-state">
            <h2>Película no encontrada</h2>
            <p>Buscando: {{ props.title || route.params.title }}</p>

            <Button variant="outline" to="/movies">
                ← Volver a la lista
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