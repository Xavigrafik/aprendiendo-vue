<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>

    <NavBar />

    <main class="container">
        <div class="grid">
            <div class="col-12">
                <RouterView />

            </div>
        </div>
    </main>
</template>

<style scoped></style>