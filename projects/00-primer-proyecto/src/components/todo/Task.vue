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
        <h3 class="task-title">{{ task.name }}</h3>
        <p class="task-description">{{ task.description }}</p>
        
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
        background-color: #ffffff;
        transition: opacity 0.3s;
        box-shadow: var(--shadow-main);
        
        &:hover {
            background-color: var(--color-gray-100);
        }

        &.is-completed {
            opacity: 0.5;
            h3 { text-decoration: line-through; }
        }

        &-title {
            max-height: 2lh;
            overflow: hidden;
            max-width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
        }
        &-description {
            max-height: 5lh;
            overflow: hidden;
            max-width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            line-clamp: 5;
        }

        &-check {
            padding:var(--space-xs) var(--space-sm);
            border-radius: var(--radius-md);
            cursor: pointer;
            display: inline-block;
            width: 65px;
            user-select: none;
            &:hover {
                background-color: var(--border-color);
            }
        }
    }
</style>