<script setup>
    import { RouterView } from 'vue-router'
    import NavBar from '@/components/NavBar.vue'
    import Footer from '@/components/Footer.vue';
    import GlobalModal from '@/components/GlobalModal.vue';
</script>

<template>

    <NavBar />

    <main class="container">
        <div class="grid-container">
            <div class="col-12">
                <RouterView />
            </div>
        </div>
    </main>
    <Footer />
    <GlobalModal />
</template>

<style lang="scss">
    @use "@/main.scss";

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>