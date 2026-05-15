<script setup>
import { computed } from 'vue';

const props = defineProps({
    to: {
        type: [String, Object],
        default: null // Si se pasa una ruta, mutará a enlace
    },
    type: {
        type: String,
        default: 'button', // 'button', 'submit' o 'reset'
    },
    variant: {
        type: String,
        default: 'primary', // 'primary', 'secondary', 'tertiary' 'danger', 'outline', icon
    },
    size: {
        type: String,
        default: 'md', // 'sm', 'md', 'lg'
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    }
});

// Calcula dinámicamente la etiqueta a usar
    const tag = computed(() => {
        if (props.disabled || props.loading) return 'button';
        return props.to ? 'router-link' : 'button';
    });

// Definimos los eventos que puede emitir
const emit = defineEmits(['click']);

const handleClick = (event) => {
    if (!props.disabled && !props.loading) {
        emit('click', event);
    }
};
</script>

<template>
    <component 
        :is="tag" 
        :to="to"
        :class="['btn', `btn-${variant}`, `size-${size}`, { 'is-loading': loading }]"
        :type="type"
        :disabled="disabled || loading"
        @click="handleClick">
        <span v-if="loading"
              class="loader"></span>
        <slot v-else />
    </component>
</template>

<style lang="scss" scoped>
.btn {

    --btn-bg: #42b883; 
    --btn-color: white;
    --darken : 0.2;
    
    padding: 10px 20px;
    margin-bottom: var(--space-sm);
    margin-right: var(--space-sm);
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-out);
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;


    // Aplicación de colores usando OKLCH para el hover
    background-color: var(--btn-bg);
    color: var(--btn-color);

    &:hover:not(:disabled) {
        transition: var(--transition-in);
        /* Explicación OKLCH:
       lch(from var(--color) l c h) nos permite desestructurar el color original.
       Restamos 0.1 a la luminosidad (L) para que todos se oscurezcan exactamente igual.
    */  
        background-color: oklch(from var(--btn-bg) calc(l - var(--darken)) c h);
    }

    &:active:not(:disabled) {
        background-color: oklch(from var(--btn-bg) calc(l - 0.5) c h);
        border-color:  var(--btn-color);
        transition: all 50ms ease;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    // Variantes definiendo solo el color base
    &-primary {
        --btn-bg: oklch(69% 0.14 149); // Verde Vue
    }

    &-secondary {
        --btn-bg: oklch(35% 0.05 250); // Azul oscuro
    }

    &-tertiary {
        --btn-bg: transparent;
        --btn-color: oklch(70% 0.14 150);

        &:hover:not(:disabled) {
            color: oklch(from var(--btn-color) calc(l - var(--darken)) c h);
            background-color: oklch(from var(--btn-color) l c h / var(--darken)); 
        }
    }

    &-danger {
        --btn-bg: oklch(60% 0.2 25); // Rojo
    }

    &-icon {
        padding: 0;
        width: 40px;
        height: 40px;
        border-radius: var(--radius-full);
    }

    &-outline {
        --btn-bg: transparent;
        --btn-color: oklch(70% 0.14 150);
        border-color: var(--btn-color);

        &:hover:not(:disabled) {
            background-color: oklch(from var(--btn-color) l c h / var(--darken)); 
            color: oklch(from var(--btn-color) calc(l - var(--darken)) c h);
        }
    }

    &.size-xs {
        font-size: 0.65rem;
        padding: 6px 14px;
        gap: 6px;
        font-weight: normal;
        .loader { width: 12px; height: 12px; }
    }
    &.size-sm {
        font-size: 0.75rem;
        padding: 6px 14px;
        gap: 6px;
        .loader { width: 12px; height: 12px; }
    }
    &.size-md {
        font-size: 0.875rem;
        padding: 10px 20px;
        gap: 8px;
        border-radius: var(--radius-md);
    }
    &.size-lg {
        font-size: 1rem;
        padding: 14px 28px;
        gap: 10px;
        border-radius: var(--radius-md);
        
        .loader { width: 20px; height: 20px; }
    }


}

/* Loader */
.loader {
    width: 16px;
    height: 16px;
    border: 2px solid currentColor;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>