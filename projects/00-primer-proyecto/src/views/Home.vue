<!-- npm install vitest @vue/test-utils jsdom -D -->

<script setup>
    import { ref } from "vue";
    import Button from "../components/Button.vue";
    import { useToggle } from '@/composables/useToggle';


    

    const handleConfirm = () => {
        const userConfirmed = confirm('¿Seguro?');
        if (userConfirmed) {
            modalIsOpen.value = false; 
        }
    };

    const counter = ref(0);
    
</script>

<template>

    <h1>Welcome to the Home Page</h1>

    <Button @click="counter++"> Clicked  {{ counter }} times </Button>
    <Button @click="openModal"> Show modal </Button>


    
    <!-- =================== MODAL =================== -->

    <Modal :open="modalIsOpen" @close="modalIsOpen = false" size="md">

       <template #header>
            <h4>Título del Modal</h4>
        </template>

        <p>Este es el contenido principal.</p>

        <template #footer>
             <Button variant="primary" @click="handleConfirm">
                OK
            </Button>
             <Button variant="outline" @click="closeModal">
                Close
            </Button>
        </template>
    </Modal>

</template>


<style></style>