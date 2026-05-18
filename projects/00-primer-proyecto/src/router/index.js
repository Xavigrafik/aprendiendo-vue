import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/movies',
            name: 'movies',
            component: () => import('../views/Movies.vue')
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('../views/Users.vue'),
            // children: {
            //     path: '/user',
            //     name: 'user',
            //     component: () => import('../views/User.vue'),
            // }
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
            component: () => import('../views/CreateMovie.vue'),
        },
        {
            path: "/design-sistem",
            name: "design-system",
            component: () => import('../views/DesignSystem.vue'),
        },
        {
            path: "/form",
            name: "form",
            component: () => import('../views/Form.vue'),
        },
    ]
});

export default router;