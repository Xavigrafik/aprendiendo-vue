<!-- https://vuejs.org/api/composition-api-lifecycle -->

<script setup>
    import { onUpdated, reactive } from "vue";
    import { useMovieStore } from "../stores/movieStore";
    import router from "../router";
    import Button from "../components/Button.vue";

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

    <form @submit.prevent="handleSubmit" class="form">
        <label for="title">Title</label>
        <input v-model="movie.title" type="text" id="title" />

        <label for="duration">Duration</label>
        <input v-model="movie.duration" type="number" id="duration" />

        <label for="director">Director</label>
        <input v-model="movie.director" type="text" id="director" />

        <Button type="submit" variant="primary">
            Submit
        </Button>
    </form>

</template>

<style>
   
</style>