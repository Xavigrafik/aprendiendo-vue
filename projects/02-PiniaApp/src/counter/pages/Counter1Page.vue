<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';


const counterStore = useCounterOptionsStore();
const { count, squareCount } = storeToRefs( counterStore );
const { increment, incrementBy } = counterStore;

</script>
<template>
    <h1>Pinia Options</h1>
    <h4>Count: {{ count }} </h4>
    <h4>Square Count: {{ squareCount }}</h4>

    <h5>State:   <code>{{ counterStore.$state }}</code></h5>

    <br>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterStore.$reset()">Reset</button>

    <br>
    <CounterOptionsValue />

</template>


<style scoped>
button {
    margin-right: 5px;
}
code {
	border: 1px solid darkred;
	display: block;
	color: darkred;
	background-color: lavenderblush;
	padding: 10px;
}
</style>