<script setup lang="ts">
    import type { RouterLink as MyRouterLinkType } from "@/router/list.routes.ts";
    import defaultLinks from "@/router/list.routes.ts";

interface Props {
    title?: string;
    links?: MyRouterLinkType[]; 
    isSecondary?: boolean;
}

    const props = withDefaults(defineProps<Props>(), {
        title: 'Main nav',
        isSecondary: false,
        // Si el padre no pasa :links, usamos los links por defecto (Home, About, Pokemon)
        links: () => defaultLinks 
    });

</script>

<template>

    <nav class="nav-bar " :class="{ 'nav-bar--secondary': isSecondary }">

        <template v-if="!isSecondary">
            <h1>{{ title }}</h1> 
        </template>

        <ul>
            <li v-for="link in props.links" :key="link.path">
                <RouterLink :to="link.path">{{ link.title }}</RouterLink>
            </li>
        </ul>
    </nav>

</template>


<style scoped>
    nav {
        align-items: flex-start;
        display: flex;
        font-size: 12px;
        margin-top: 10px;
        text-align: center;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
        &.nav-bar--secondary {
            background-color: white;
            padding: 0.5rem;
            border-bottom: 1px solid var(--color-border);
        }
    }
    

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    img {
        margin-right: 5px;
    }

    span {
        margin-right: 10px;
    }

    a {
    margin-right: 5px; 
    }



    nav a.router-link-active {
    color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
    background-color: transparent;
    }

    nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
    border: 0;
    }
</style>
