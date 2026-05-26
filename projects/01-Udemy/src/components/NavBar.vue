<script setup>
    import { ref, onUpdated, onMounted, onUnmounted, reactive, watch } from 'vue';
    import { RouterLink } from "vue-router";

</script>

<template>

    <nav>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
            <li>
                <RouterLink to="/pokemon">Pokemon</RouterLink>
            </li>
        </ul>
    </nav>

</template>

<style scoped>
    .router-link-active,
     router-link-exact-active {
        color: red;
        border-bottom: 1px solid red;
    }

    nav ul {
        display: flex;
        justify-content: center;
        gap: 1rem;
        list-style: none;
    }
</style>
