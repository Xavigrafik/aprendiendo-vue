<script setup>
    import Button from '../Button.vue';
    import { useTasksStore } from '@/stores/tasksStore';
    const tasksStore = useTasksStore();

</script>

<template>
    <section class="filters">
        <small>Filter by: </small>
        <div class="filter-btns">
            <Button @click="tasksStore.setFilter('todo')" size="xs" :class="{ active: tasksStore.filterBy === 'todo' }">To-do</Button>
            <Button @click="tasksStore.setFilter('done')" size="xs" :class="{ active: tasksStore.filterBy === 'done' }">Done</Button>
            <Button v-if="tasksStore.filterBy" @click="tasksStore.setFilter('')" variant="tertiary" size="xs">x Clear</Button>
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