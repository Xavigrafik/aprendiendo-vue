<script setup>
    import { ref } from 'vue';
    import Button from '../Button.vue';
    import { storeToRefs } from 'pinia';
    import Task from '@/components/todo/Task.vue';
    import { useTasksStore } from '@/stores/tasksStore';
    const tasksStore = useTasksStore();
    const { tasks } = storeToRefs(tasksStore);

    const newTask = ref({
        name: "",
        description: "",
    });
</script>

<template>
    <section>
        <div class="tasksList col-12">
            <Task v-for="task in tasks" :key="task.id" :task="task"></Task>
        </div>

        <div class="add-task">
            <h3>Add new task</h3>

            <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..">
            <br>

            <textarea v-model="newTask.description" name="description" rows="4"
                placeholder="Enter a description.."></textarea>

            <!-- <Button @click="handleAddTask">Add task</Button> -->
        </div>
    </section>

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