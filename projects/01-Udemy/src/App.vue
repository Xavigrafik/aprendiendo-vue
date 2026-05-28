<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="50"
      height="50"
    />

    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped>
    header {
        line-height: 1.5;
        max-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: #f2f3f4;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

   

    @media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
 
    }
</style>
