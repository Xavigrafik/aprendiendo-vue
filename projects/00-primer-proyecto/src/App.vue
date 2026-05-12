<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
    
    <NavBar />

    <main class="container">
        <RouterView />
    </main>
</template>

<style scoped>
/* Estilos globales de layout */
main {
    padding: 2rem;
}
</style>