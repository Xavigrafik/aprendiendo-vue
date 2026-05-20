<script setup>
import Button from '../Button.vue';

 
</script>

<template>
     <section class="filters">
        <small>Filter by: </small>
        <div class="filter-btns">
            <Button size="xs" class="active">To-do</Button>
            <Button size="xs">Done</Button>
            <Button variant="tertiary" size="xs">x Clear</Button>
        </div>
     </section>
</template>


<style scoped lang="scss">
    .filters {
        margin-bottom: 1em;
        display: flex;
        align-items: baseline;

        .filter-btns {
            margin-left: 1em;
        }
    }
</style>