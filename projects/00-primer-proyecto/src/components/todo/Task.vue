<script setup>
    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    });

    import { useTasksStore } from '@/stores/tasksStore';
    const tasksStore = useTasksStore();
    
</script>

<template>
    <div class="task" :class="{ 'is-completed': task.completed }">
        <h3>{{ task.name }}</h3>
        <p>{{ task.description }}</p>
        
       <label class="task-check" :for="task.id">
            <input :id="task.id" type="checkbox" :checked="task.completed" @change="tasksStore.toggleCompleted(task)" />
            {{ task.completed ? 'Done' : 'To do' }}
        </label>
    </div>
</template>

<style lang="scss" scoped>
    .task {
        padding: var(--space-md);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        margin-bottom: var(--space-sm);
        background-color: var(--bg-card, #ffffff);
        transition: opacity 0.3s;
        box-shadow: var(--shadow-main);
        
        &:hover {
            background-color: var(--color-gray-100);
        }

        &.is-completed {
            opacity: 0.5;
            h3 { text-decoration: line-through; }
        }

        &-check {
            padding:var(--space-xs) var(--space-sm);
            border-radius: var(--radius-md);
            cursor: pointer;
            display: inline-block;
            &:hover {
                background-color: var(--border-color);
            }
        }
    }
</style>