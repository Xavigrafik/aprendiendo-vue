<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        to: {
            type: [String, Object],
            default: null
        },
        type: {
            type: String,
            default: 'button', // 'button', 'submit' o 'reset'
        },
        variant: {
            type: String,
            default: 'primary', // 'primary', 'secondary', 'tertiary' 'danger', 'outline', icon
        },
        squared: {
            type: Boolean,
            default: false, 
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
        },
        icon: {
            type: String,
            default: null // 'plus', 'trash', 'edit'.
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
    <component :is="tag" :to="to" :class="['btn', `btn-${variant}`, `size-${size}`, { 'is-loading': loading },  { 'squared': squared }]"
        :type="type" :disabled="disabled || loading" :aria-busy="loading" @click="handleClick" >
        <i v-if="icon && !loading" :class="['icon', `${icon}`]">{{icon}}</i>
        <span v-if="loading" class="loader" aria-hidden="true"></span>
        <slot/>
    </component>
</template>

<style lang="scss" scoped>
    .btn {
        --btn-brand: var(--color-primary-dark);
        --btn-bg: var(--btn-brand);
        --btn-color: white;
        --darkenBtn: 0.2;
        --border-width: 2px;
        
        padding: 0.375rem 0.75rem;
        margin-bottom: var(--space-sm);
        margin-right: var(--space-sm);
        border-radius: var(--radius-full);
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition-out);
        border: var(--border-width) solid transparent ;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;
        
        background-color: var(--btn-bg);
        color: var(--btn-color);
        box-shadow: 0 0 0 var(--border-width) var(--btn-bg);
        
        &:focus:not(:disabled) {
            box-shadow: 0 0 0 var(--border-width) oklch(from var(--btn-brand) calc(l + 0.12) c h);
        }

        &:focus-visible:not(:disabled) {
            box-shadow: 0 0 0 var(--border-width) oklch(from var(--btn-brand) calc(l + 0.25) c h);
            outline: var(--border-width) solid oklch(from var(--btn-brand) calc(l - 0.25) c h);
            outline-offset: var(--border-width);
        }

        &.is-hovered:not(:disabled),
        &:hover:not(:disabled) {
            transition: var(--transition-in);
            background-color: oklch(from var(--btn-brand) calc(l - var(--darkenBtn)) c h / var(--btn-hover-alpha, 1));
            border-color: oklch(from var(--btn-brand) calc(l - var(--darkenBtn)) c h / var(--btn-hover-alpha, 1));
            box-shadow: 0 0 0 var(--border-width) oklch(from var(--btn-brand) calc(l - var(--darkenBtn)) c h);
        }

        &:active:not(:disabled),
        &.active:not(:disabled) {
            transform: none; 
        
        // Damos un salto de color instantáneo para que el usuario note el "clic" en la pantalla
        background-color: oklch(from var(--btn-brand) calc(l - 0.18) c h / var(--btn-hover-alpha, 1));
        border-color: oklch(from var(--btn-brand) calc(l - 0.18) c h / var(--btn-hover-alpha, 1));
        box-shadow: 0px 0px 0px 2px oklch(from var(--btn-brand) calc(l - 0.18) c h);
        
        // Transición hiper-rápida para que el cambio cromático sea inmediato al pulsar
        transition: background-color 40ms ease, border-color 40ms ease, box-shadow 40ms ease;
        outline: none;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &.squared {
            border-radius: var(--radius-sm)!important;
        }

        // Variantes definiendo solo el color base
        &-primary {
            --btn-brand: var(--color-primary);
            --btn-bg: var(--btn-brand);
            --btn-color: white;
            --btn-hover-alpha: 0.85;
            --darkenBtn: 0.1;
        }
        
        &-secondary {
            --btn-brand: var(--color-secondary);
            --btn-bg: var(--btn-brand);
            --btn-color: white;
            --btn-hover-alpha: 0.75;
            --darkenBtn: 0.3;
        }

        &-tertiary {
            --btn-brand: var(--color-primary);
            --btn-bg: transparent;
            --btn-color: var(--btn-brand);
            
            // Al hacer hover, se rellena con un 20% de opacidad del color de marca
            // 💡 La magia: Le decimos al hover base que use un canal alfa (opacidad) del 15%
            // e impedimos que baje la luminosidad en reposo.
            --btn-hover-alpha: 0.15; 
            --darkenBtn: 0;
        }
        &-outline {
            --btn-brand: oklch(70% 0.14 150);
            --btn-bg: transparent;
            --btn-color: var(--btn-brand);
            --btn-hover-alpha: 0.20;
            --darkenBtn: 0;

            border-color: var(--btn-brand);

            &:hover:not(:disabled) {
                border-color: oklch(from var(--btn-brand) l c h);
                box-shadow: 0 0 0 var(--border-width) oklch(from var(--btn-brand) l c h );
            }
        }
        
        &-danger {
            --btn-brand: var(--color-error);
            --btn-bg: var(--btn-brand);
            --btn-color: white;
            --btn-hover-alpha: 0.75; 
            --darkenBtn: 0.3;
        }

        &-icon {
            --btn-brand: oklch(69% 0.14 149);
            --btn-bg: var(--btn-brand);
            --btn-color: white;
            
            padding: 0!important;
            width: 40px;
            height: 40px;
            border-radius: var(--radius-full);
        }

        &.size-xs {
            font-size: 0.65rem;
            padding: 0.25rem 0.75rem; // 4px arriba/abajo, 12px lados
            gap: 4px;
            font-weight: normal;

            .loader {
                width: 12px;
                height: 12px;
            }
        }

        &.size-sm {
            font-size: 0.75rem;
            padding: 0.375rem 1rem; // 6px arriba/abajo, 16px lados

            gap: 6px;

            .loader {
                width: 12px;
                height: 12px;
            }
        }

        &.size-md {
            font-size: 0.875rem;
            padding: 0.5rem 1.25rem; // 8px arriba/abajo, 20px lados (El estándar de la industria)
            gap: 8px;
            
            &.squared {
                border-radius: var(--radius-md);
            }
            
            .loader {
                width: 16px; // Añadido para que escale bien en el tamaño mediano
                height: 16px;
            }
        }

        &.size-lg {
            font-size: 1rem;
            padding: 0.625rem 1.5rem; // 10px arriba/abajo, 24px lados
            gap: 10px;
            
            &.squared {
                border-radius: var(--radius-md);
            }

            .loader {
                width: 20px;
                height: 20px;
            }
        }


    }

    /* Loader */
    .loader {
        width: 16px;
        height: 16px;
        border: var(--border-width) solid currentColor;
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

    .icon {
        outline: var(--border-width) solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }
</style>