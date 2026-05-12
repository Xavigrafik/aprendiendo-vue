import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import CreateMovie from "../views/CreateMovie.vue";
import MovieDetails from "../views/MovieDetails.vue";
import DesignSystem from "../views/DesignSystem.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/movies',
            name: 'movies',
            component: () => import('../views/Movies.vue')
        },
        {
            // USAMOS 'title' COMO PARÁMETRO ÚNICO
            path: '/movies/:title', 
            name: 'movie-details', 
            component: () => import('../views/MovieDetails.vue'),
            props: true 
        },
        {
            path: "/create",
            name: "create",
            component: CreateMovie,
        },
        {
            path: "/design-sistem",
            name: "design-system",
            component: DesignSystem,
        },
    ]
});

export default router;