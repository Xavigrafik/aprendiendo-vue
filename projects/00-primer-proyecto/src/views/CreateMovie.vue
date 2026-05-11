<!-- https://vuejs.org/api/composition-api-lifecycle -->

<script setup>
import { onUpdated, reactive } from "vue";
import { useMovieStore } from "../stores/movie";
import router from "../router";

const movieStore = useMovieStore();

const movie = reactive({
    title: "",
    duration: 0,
    director: "",
});

const handleSubmit = () => {
    if (!movie.title || !movie.duration || !movie.director) {
        alert("Rellena todos los campos, por favor");
        return;
    }

    movieStore.addMovie(movie);

    movie.title = "";
    movie.duration = 0;
    movie.director = "";

    router.push({ name: "movies" });
};

onUpdated(() => {
    console.log("Create Movie Component Updated");
})
</script>

<template>

    <form @submit.prevent="handleSubmit"
          class="form">
        <label for="title">Title</label>
        <input v-model="movie.title"
               type="text"
               id="title" />

        <label for="duration">Duration</label>
        <input v-model="movie.duration"
               type="number"
               id="duration" />

        <label for="director">Director</label>
        <input v-model="movie.director"
               type="text"
               id="director" />

        <button>Enviar</button>
    </form>
</template>

<style>
.form {
    background-color: #e8e8e8 ;
    margin: 20px auto;
    border: 1px solid #ccc;
    padding: 1rem;
    max-width: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        font-size: 20px;
        margin-bottom: 0;
    }
    input{
        &[type="text"],
        &[type="number"] {
            width: auto;
            height: 40px;
            padding: 0 1em;
            margin-bottom: 2em;
            border-radius: 5px;
            max-width: 100%;
        }
    }

}
</style>