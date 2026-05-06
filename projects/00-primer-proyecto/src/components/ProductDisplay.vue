<script setup>
import { ref, computed } from 'vue'
import ReviewForm from '@/components/ReviewForm.vue'
import ReviewList from '@/components/ReviewList.vue'
import socksGreenImage from '@/assets/images/socks_green.jpeg'
import socksBlueImage from '@/assets/images/socks_blue.jpeg'

const props = defineProps({
    premium: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['add-to-cart'])

const product = ref('Socks')
const brand = ref('Vue Mastery')

const selectedVariant = ref(0)

const details = ref(['50% cotton', '30% wool', '20% polyester'])

const variants = ref([
    { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
    { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
])

const reviews = ref([])

const title = computed(() => {
    return brand.value + ' ' + product.value
})

const image = computed(() => {
    return variants.value[selectedVariant.value].image
})

const inStock = computed(() => {
    return variants.value[selectedVariant.value].quantity > 0
})

const shipping = computed(() => {
    if (props.premium) {
        return 'Free'
    }
    else {
        return 2.99
    }
})

const addToCart = () => {
    emit('add-to-cart', variants.value[selectedVariant.value].id)
}

const updateVariant = (index) => {
    selectedVariant.value = index
}

const addReview = (review) => {
    reviews.value.push(review)
}
</script>

<template>
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h3>{{ title }}</h3>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="(variant, index) in variants"
                     :key="variant.id"
                     @mouseover="updateVariant(index)"
                     class="color-circle"
                     :style="{ backgroundColor: variant.color }">
                </div>
                <button class="button"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        v-on:click="addToCart">
                    Add to cart
                </button>
            </div>
        </div>
        <ReviewList v-if="reviews.length > 0"
                    :reviews="reviews"></ReviewList>
        <ReviewForm @review-submitted="addReview"></ReviewForm>
    </div>

    
</template>

<style scoped>
.product-display {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.product-image {
    width: 300px;
}

.product-info {
    padding: 1em;
    background-color: #fff;
    width: 500px;
    border: 1px solid #d8d8d8;
}

.review-form {
    display: flex;
    flex-direction: column;
    width: 425px;
    padding: 20px;
    margin: 40px;
    border: 2px solid #d8d8d8;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.review-container {
    width: 425px;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
    margin-left: 40px;
    border: 2px solid #d8d8d8;
}

.review-container li {
    margin-bottom: 30px;
}

.review-form .button {
    display: block;
    margin: 30px auto;
}
</style>