<script setup>
import { ref } from 'vue';
import { useTasksStore } from '@/stores/tasksStore';
import Button from '@/components/Button.vue'; // Asegúrate de importar tu componente Button

const tasksStore = useTasksStore();

// 1. Extraemos la acción (función) directamente de la store, sin storeToRefs
const { addTask } = tasksStore;

// 2. Creamos el objeto reactivo local para los inputs del formulario
const newTask = ref({
    name: '',
    description: ''
});

// 3. Función intermedia para enviar la tarea y limpiar el formulario
const handleAddTask = () => {
    if (!newTask.value.name.trim()) return; // Validación básica
    
    addTask({ ...newTask.value }); // Enviamos una copia limpia de los datos
    
    // Limpiamos el formulario tras añadirla
    newTask.value.name = '';
    newTask.value.description = '';
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
    
    <label for="description">Description</label>
    <textarea 
        id="description" 
        v-model="newTask.description" 
        name="description" 
        rows="4" 
        placeholder="Enter a description.." 
    ></textarea>

    <Button @click="handleAddTask"> Add task </Button>
  </div>
</template>

<style scoped>
/* Los estilos centralizados en _forms.scss globales */
</style>