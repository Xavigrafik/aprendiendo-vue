<!-- npm install vitest @vue/test-utils jsdom -D -->

<script setup>
    import { ref } from "vue";
    import Button from "../components/Button.vue";
    import Modal from "../components/Modal.vue";


    const modalIsOpen = ref(true);
    const openModal = () => {
        modalIsOpen.value = true;
    };
    const closeModal = () => {
        modalIsOpen.value = false;
    };

    const okCallbackModal = () => {
        alert('¿Seguro?');
    };

    const counter = ref(0);
    
</script>

<template>

    <h1>Welcome to the Home Page</h1>

    <h2 id="counter">
        <Button @click="counter++">
            Clicked  {{ counter }} times
        </Button>
    </h2>

    <Button @click="openModal">
        Show modal
    </Button>

    
    <!-- =================== MODAL =================== -->

    <Modal :open="modalIsOpen" @close="modalIsOpen = false" size="md">

       <template #header>
            <h4>Título del Modal</h4>
        </template>

        <p>Este es el contenido principal.</p>

        <template #footer>
             <Button variant="primary" @click="okCallbackModal">
                OK
            </Button>
             <Button variant="outline" @click="closeModal">
                Close
            </Button>
        </template>
    </Modal>

</template>


<style></style>