<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';

// Estado reactivo para capturar todos los campos del formulario
const formData = ref({
    fullName: '',
    email: '',
    age: null,
    role: '',
    bio: '',
    newsletter: false,
    experience: 'junior'
});

const handleSubmit = () => {
    console.log('Datos del formulario enviados:', formData.value);
    alert('¡Formulario enviado con éxito! Revisa la consola.');
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <h2>Visualizador de Componentes de Formulario</h2>
        <p class="form-subtitle">Comprueba el diseño de tus campos e inputs en tiempo real</p>

        <div class="form-field">
            <label for="fullName">Nombre Completo</label>
            <input 
                id="fullName" 
                v-model="formData.fullName" 
                type="text" 
                placeholder="Ej. Juan Pérez" 
                required
            />
        </div>

        <div class="form-group-row">
            <div class="form-field">
                <label for="email">Correo Electrónico</label>
                <input 
                    id="email" 
                    v-model="formData.email" 
                    type="email" 
                    placeholder="juan@ejemplo.com" 
                    required
                />
            </div>
            
            <div class="form-field">
                <label for="age">Edad</label>
                <input 
                    id="age" 
                    v-model.number="formData.age" 
                    type="number" 
                    placeholder="25" 
                    min="18" 
                    max="99"
                />
            </div>
        </div>

        <div class="form-field">
            <label for="role">¿Cuál es tu rol principal?</label>
            <select id="role" v-model="formData.role" required>
                <option value="" disabled selected>Selecciona una opción...</option>
                <option value="frontend">Desarrollador Frontend</option>
                <option value="backend">Desarrollador Backend</option>
                <option value="design">Diseñador UI/UX</option>
                <option value="fullstack">Fullstack Developer</option>
            </select>
        </div>

        <div class="form-field">
            <label for="bio">Biografía / Notas</label>
            <textarea 
                id="bio" 
                v-model="formData.bio" 
                placeholder="Cuéntanos un poco sobre tu perfil profesional o proyectos recientes..."
                rows="4"
            ></textarea>
        </div>

        <div class="form-field radio-group">
            <label>Nivel de Experiencia</label>
            <div class="radio-options">
                <label class="option-label">
                    <input type="checkbox" class="hidden-check" style="display:none;" /> <input type="radio" v-model="formData.experience" value="junior" name="experience">
                    <span>Junior (0-2 años)</span>
                </label>
                <label class="option-label">
                    <input type="radio" v-model="formData.experience" value="mid" name="experience">
                    <span>Mid-weight (2-5 años)</span>
                </label>
                <label class="option-label">
                    <input type="radio" v-model="formData.experience" value="senior" name="experience">
                    <span>Senior (+5 años)</span>
                </label>
            </div>
        </div>

        <div class="form-field checkbox-field">
            <label class="option-label">
                <input type="checkbox" v-model="formData.newsletter">
                <span>Deseo suscribirme al boletín informativo semanal</span>
            </label>
        </div>

        <Button type="submit">Enviar Formulario</Button>

    </form>
</template>

