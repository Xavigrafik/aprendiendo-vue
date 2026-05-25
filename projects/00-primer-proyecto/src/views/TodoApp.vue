<script setup>
 import Filter from '@/components/todo/Filter.vue';
 import TaskList from '../components/todo/TaskList.vue';
 
</script>

<template>
    <div class="row centered">
        <div class="col-12 col-md-8">
            <Filter></Filter>
            <TaskList></TaskList>
        </div>
    </div>
</template>


<style scoped>

</style>