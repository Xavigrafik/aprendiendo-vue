<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import ProductDisplay from '@/components/ProductDisplay.vue'
import DefaultComponent from '@/components/DefaultComponent.vue'

const cart = ref([])
const premium = ref(true)

const updateCart = (id) => {
    cart.value.push(id)
}
</script>

<template>
    
        <NavBar></NavBar>

    <div class="cart">Cart({{ cart.length }})</div>
        <ProductDisplay :premium="premium" @add-to-cart="updateCart"></ProductDisplay>

        <div style="display: flex;">
            <DefaultComponent></DefaultComponent>
            <DefaultComponent></DefaultComponent>
        </div>
</template>