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
            path: '/movies/:identifier',
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
            path: '/users',
            name: 'users',
            component: () => import('../views/Users.vue'),
        },
        {
            path: '/users/:id',
            name: 'user',
            component: () => import('../views/User.vue'),
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
        {
            path: "/to-do",
            name: "todo",
            component: () => import('../views/TodoApp.vue'),
        },
        {
            path: "/form-preview",
            name: "form-preview",
            component: () => import('../views/FormPreview.vue'),
        },
    ]
});

export default router;