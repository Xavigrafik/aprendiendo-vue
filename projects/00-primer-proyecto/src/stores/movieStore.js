import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore(
    "movie",
    () => {
        const movies = ref([
            {
                id: 1,
                title: "Inception",
                duration: "148 min",
                director: "Christopher Nolan",
            },
            {
                id: 2,
                title: "The Lord of the Rings",
                duration: "201 min",
                director: "Peter Jackson",
            },
            {
                id: 3,
                title: "Interstellar",
                duration: "169 min",
                director: "Christopher Nolan",
            },
        ]);

        // Genera un ID numérico único automático al añadir
        const addMovie = (movie) => {
            movies.value.push({ 
                id: Date.now(), // ID autogenerado único
                ...movie 
            });
        };

        // Ahora puedes buscar por ID (más seguro) o por título
        const getMovie = (identifier) => {
            return movies.value.find(
                (movie) => movie.id === Number(identifier) || movie.title === identifier
            );
        };

        return {
            movies,
            addMovie,
            getMovie,
        };
    },
    {
        persist: true,
    }
);