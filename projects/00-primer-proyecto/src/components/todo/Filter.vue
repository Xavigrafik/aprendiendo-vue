<script setup>
    import Button from '../Button.vue';
    import addTaskForm from '@/components/todo/addTaskForm.vue';

    import { useModalStore } from '@/stores/modalStore';
    const modalStore = useModalStore();

    import { useTasksStore } from '@/stores/tasksStore';
    const tasksStore = useTasksStore();

    const addTaskModal = () => {
        modalStore.open({
            type: 'component',
            title: 'Añadir tarea:',
            cancelBtnText: 'hidden', 
            component: addTaskForm,
        });
    };  

</script>

<template>
    <section class="filters row centered">
        <div class="col-3">
            <small>Filter by: </small>
            <div class="filter-btns">
                <Button @click="tasksStore.setFilter('todo')" size="xs" :class="{ active: tasksStore.filterBy === 'todo' }">To-do</Button>
                <Button @click="tasksStore.setFilter('done')" size="xs" :class="{ active: tasksStore.filterBy === 'done' }">Done</Button>
                <Button v-if="tasksStore.filterBy" @click="tasksStore.setFilter('')" variant="tertiary" size="xs">x Clear</Button>
            </div>
        </div>
        <div class="col-3"> 
             <Button @click="addTaskModal" icon="+"> Add new task</Button>
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