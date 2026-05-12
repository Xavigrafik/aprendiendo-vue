<!-- npm install vitest @vue/test-utils jsdom -D -->

<script setup>
    import { ref } from "vue";
    import Button from "../components/Button.vue";
    import Modal from "../components/Modal.vue";


    const modalIsOpen = ref(true);
    const openModal = () => {
        modalIsOpen.value = true;
    };

    const counter = ref(1);
</script>

<template>

    <h1>Welcome to the Home Page</h1>

    <h2 id="counter">
        Counter: {{ counter }}
        <button @click="counter++" id="counter-btn">+</button>
    </h2>

    <Button @click="openModal">
        Show modal
    </Button>

    <Modal :open="modalIsOpen" @close="modalIsOpen = false">

       <template #header>
            <h4>Título del Modal</h4>
        </template>

        <p>Este es el contenido principal.</p>

        <template #footer>
            <p>Este es el contenido del footer</p>
        </template>
    </Modal>

</template>


<style></style>