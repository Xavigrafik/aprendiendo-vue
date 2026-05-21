<script setup>
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';

    import Button from '@/components/Button.vue';
    import Task from '@/components/todo/Task.vue';
    import { useToggle } from '@/composables/useToggle';
    import addTaskForm from '@/components/todo/addTaskForm.vue';
    
    import { useModalStore } from '@/stores/modalStore';
    const modalStore = useModalStore();
    const addTaskModal = () => {
    modalStore.open({
        type: 'component',
        title: 'Añadir tarea:',
        cancelBtnText: 'hidden', 
        component: addTaskForm,
    });
};  

    import { useTasksStore } from '@/stores/tasksStore';
    const tasksStore = useTasksStore();
    const { filteredTasks, addTask } = storeToRefs(tasksStore);

</script>

<template>
    <section>
        <Button @click="addTaskModal"> Add task </Button>
        <div class="tasksList col-12">
            <Task v-for="task in filteredTasks" :key="task.id" :task="task"></Task>
        </div>
    </section>
    <!-- <addTaskForm></addTaskForm> -->

</template>


<style scoped>
    .tasksList {
        margin: 0 auto;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 300px);
        justify-content: center;
        gap: var(--space-md)
    }
</style>