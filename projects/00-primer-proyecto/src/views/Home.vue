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

    <div class="row centered" style="height: 100vh;">
        <div class="col-10">
            
            <h1>Welcome to the Home Page</h1>
            
            <Button @click="counter++"> Clicked  {{ counter }} times </Button>
            <Button @click="openModal"> Show modal </Button>
        </div>
        
    </div>

</template>


<style></style>