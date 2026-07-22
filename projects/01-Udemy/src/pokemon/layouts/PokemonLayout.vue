<script setup lang="ts">
    import { RouterView } from "vue-router";
    import NavBar from "@/components/NavBar.vue";

    import type { RouterLink } from "@/router/list.routes";
    import { pokemonRoute } from '../router';

    
    const routeLinks: RouterLink[] = pokemonRoute.children!.map(({ path, props, name }) => {
        return {
            name: name?.toString() ?? '',
            path: path, 
            title: (props as { title: string })?.title ?? name?.toString() ?? 'Sin título',
        }
    });
</script>

<template>
    <div class="pokemon-layout">
        <NavBar :links="routeLinks" is-secondary></NavBar>
    <!-- <Suspense> -->
        <RouterView />
    <!-- <template #fallback>
            Loading...
        </template>
    </Suspense> -->
    </div>
</template>

<style scoped>
    .pokemon-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: lightyellow;
        min-height: 350px;
    }
</style>