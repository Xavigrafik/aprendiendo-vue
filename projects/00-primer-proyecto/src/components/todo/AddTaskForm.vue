<script setup>
    import { ref } from 'vue';
    import { useTasksStore } from '@/stores/tasksStore';
    import { useModalStore } from '@/stores/modalStore'; 
    import Button from '@/components/Button.vue';

    const tasksStore = useTasksStore();
    const modalStore = useModalStore();

    const { addTask } = tasksStore;

    //Objeto reactivo local para los inputs del formulario
    const newTask = ref({
        name: '',
        description: ''
    });

    // 3. Función intermedia para enviar la tarea y limpiar el formulario
    const handleAddTask = () => {

        if (!newTask.value.name.trim()) return;

        addTask({ ...newTask.value });
                newTask.value.name = '';
        newTask.value.description = '';
        
        modalStore.close();
    };

</script>

<template>
    <div class="form-field">
        <label for="title">Title</label> 
        <input 
        id="title" 
        v-model="newTask.name" 
        type="text" 
        name="title" 
        placeholder="Enter a title.." 
        />
    </div>
      
    <div class="form-field">
        <label for="description">Description</label>
        <textarea 
            id="description" 
            v-model="newTask.description" 
            name="description" 
            rows="4" 
            placeholder="Enter a description.." 
        ></textarea>
    </div>

    <Button @click="handleAddTask"> Add task </Button>

</template>

<style scoped>
/* Los estilos centralizados en _forms.scss globales */
</style>