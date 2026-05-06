<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/useUserStore';

const userStore = useUserStore();

// OJO: Si desestructuras las variables, pierden reactividad. 
// Usa storeToRefs para mantener el vínculo.
const { name, points, doublePoints, isVip } = storeToRefs(userStore);
</script>

<template>
    <div class="card">
        <p>Usuario: {{ name }}</p>
        <p>Puntos: {{ points }}</p>
        <p>Doble Puntos: {{ doublePoints }}</p>
        <p v-if="isVip">Nivel: ⭐ VIP</p>

        <!-- Las acciones se llaman directamente desde el objeto store -->
        <button @click="userStore.increment">Sumar punto</button>
        <button @click="userStore.reset">Reset puntos</button>
        <button @click="userStore.resetFullStore">resetFullStore</button>
    </div>
</template>

<style scoped>
.card {
    padding: 1em;
    background-color: #fff;
    width: 500px;
    border: 1px solid #d8d8d8;
}
</style>
