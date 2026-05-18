<script setup>
    import { ref, watch } from 'vue';
    import Button from '../components/Button.vue';


    const inputText = ref('');
    const inputPlaceholder = ref('Add a name');
    const edad = ref(55);

    const bool = ref(false)
    const isFav = ref(false)
    const radio = ref('');
    const checkbox = ref([])
    const select = ref("")
    const selectMultiple = ref([])

    const errors = ref({})
    const validate = () => {
        errors.value = {}
        if (!inputText.value) errors.value.name = 'Campo obligatorio'
        if (checkbox.value.length === 0) errors.value.checkbox = 'Elige al menos uno'
        return Object.keys(errors.value).length === 0
}
    
    const submitHandler = () => {
        if (!validate()) return;
        console.log('Formulario válido y enviado:', {
            name: inputText.value,
            edad: edad.value,
            radio: radio.value,
            checkbox: checkbox.value
        });
    };

    watch([inputText, checkbox], () => {
        validate();
    });
    
    const items = ref([
            {id:1, label: "10 cosas"},
            {id:2, label: "Compras"},
            {id:3, label: "Pintar"}
        ]);

    const toggleFav = () => {
        isFav.value = !isFav.value
    }

</script>

<template>

    <form @submit.prevent="submitHandler()">
        
        <div class="field-group">
            <div class="field" :class="{ 'has-error': errors.name }">
                <input v-model.trim="inputText" type="text" :placeholder = "inputPlaceholder" />
            </div>
            <p>inputText :{{ inputText ? inputText : inputPlaceholder }}</p>
            <small style="color: var(--color-success);"  v-if="inputText">Hay texto!!!</small>
            <small style="color: var(--color-error);" v-else>No hay texto en inputText </small>
            <div class="field">
                Lazy: 
                <input v-model.lazy="inputText" /> 
                <p>Actualiza en blur, no en cada tecla</p>
            </div>
        </div>

        <div class="field-group">
            Number:
            <input v-model.number="edad" type="number" />
            <p>castea a Number</p>
        </div>

        <div class="field-group"> 
            
            <label><input type="radio" v-model="radio" value="low">Low</label>
            <label><input type="radio" v-model="radio" value="medium">Medium</label>
            <label><input type="radio" v-model="radio" value="high" >High</label>
            
            <p>radio: {{ radio }}</p>
        </div>

        <div class="field-group"> 
            <label><input type="checkbox" v-model="bool">Booleano</label>
            <p>bool: {{ bool }}</p>
        </div>

        
        <div class="field-group">

            
            <label><input type="checkbox" v-model="checkbox" value="vainilla">Vainilla</label>
            <label><input type="checkbox" v-model="checkbox" value="choco   ">Choco</label>
            <label><input type="checkbox" v-model="checkbox" value="fresa"  >Fresa</label>
            <p>checkbox: {{ checkbox }}</p>
        </div>
            
        
        <div class="field-group"> 
            
            <select v-model="select">
                <option disabled value="">Prefer not to say</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
            
            <p>select: {{ select }}</p>


            <select v-model="selectMultiple" multiple>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
            <p>selectMultiple: {{ selectMultiple }}</p>
        </div>
            
         <div class="field-group">
            <button class="favButton" @click="toggleFav()">
                {{ isFav ? "💗" : "🤍" }} Toggle fav
            </button>
         </div>

        <Button type="submit" :disabled="Object.keys(errors).length > 0">Submit</Button>

        <p>errors: {{errors}}</p>
    </form>

    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.label }}
        </li>
    </ul>

</template>

    <style lang="scss">

    form {
        max-width: 560px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    // Inputs base compartido
    %input-base {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--color-gray-500);
        border-radius: 6px;
        font-size: 0.875rem;
        color: var(--text-primary);
        background: white;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;

        &:focus {
            border-color: var(--color-success);
            box-shadow: 0 0 0 3px rgba(var(--color-success), 0.15);
        }
    }

    input[type="text"],
    input[type="number"] {
        @extend %input-base;
    }

    select {
        @extend %input-base;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        padding-right: 32px;

        &[multiple] {
            height: 3lh;
            background-image: none;
            padding-right: 12px;
            vertical-align: top;

            &:focus,
            &:active { height: auto; }
        }
    }

    // Grupos de radio y checkbox
    .radio-group,
    .checkbox-group {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        label {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.875rem;
            cursor: pointer;
        }
        input[type="radio"],
        input[type="checkbox"] {
            width: 16px;
            height: 16px;
            accent-color: var(--color-success);
            cursor: pointer;
        }
    }

    // Campos con error
    .field {
        display: flex;
        flex-direction: column;
        gap: 4px;

        &.has-error {
            input, select { border-color: var(--color-error); }
        }
    }

    .error-msg {
        font-size: 0.75rem;
        color: var(--color-error);
    }

    // Separadores como títulos de sección
    .field-group {
        border-top: 1px solid var(--color-gray-500);
        padding-top: 1rem;
        padding: 1em;
        
        &:hover{
            border-top: 1px solid transparent;
            background-color: #fff;
        }

        h6 {
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 0.5rem;
        }
    }

    .favButton {
        font-size: 1.5em;
        border: 0;
        cursor: pointer;
        background-color: transparent;
    }

    // Debug output
    .debug {
        font-size: 0.75rem;
        background: var(--bg-primary);
        padding: 4px 8px;
        border-radius: 4px;
        font-family: monospace;
    }
</style>







