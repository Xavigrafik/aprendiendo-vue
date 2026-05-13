<script setup>

    import { onMounted, onUnmounted, watch } from "vue";
    
    const props = defineProps({
        open: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md', // 'sm', 'md', 'lg', 'full'
        }
    });

    const emit = defineEmits(['close', 'confirm']);

    const handleEscape = (e) => {
        if (e.key === 'Escape' && props.open) {
            emit('close');
        }
    };
    
onMounted(() => {
    
    window.addEventListener('keydown', handleEscape);
    console.log('Modal Monunted..');
    
    });
    onUnmounted(() => {
        console.log('Modal UNmonunted..');
        window.removeEventListener('keydown', handleEscape);
    });

</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="open" class="modal-overlay" @click.self="emit('close')">
                <Transition name="zoom" appear>
                    <div v-if="open" :class="['modal-content', `size-${size}`]">
                        <header class="modal-header">
                            <slot name="header" />
                            <div @click="emit('close')" class="close-btn"></div>
                        </header>

                        <main class="modal-body">
                            <slot />
                        </main>

                        <footer  v-if="$slots.footer" class="modal-footer">
                            <slot name="footer"></slot>
                        </footer>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<style>

    /* Fade para el fondo oscuro */
    .fade-enter-active{} .fade-leave-active { transition: opacity 0.3s ease; }
    .fade-enter-from, .fade-leave-to { opacity: 0; }

    /* Zoom para la caja blanca */
    .zoom-enter-active{transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);}
    .zoom-leave-active { transition: all 0.2s ease-in; }
    .zoom-enter-from, .zoom-leave-to { opacity: 0; transform: scale(0.9) translateY(30px); }

    .modal-overlay {
        background-color: rgba(0, 0, 0, 0.66);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }
    .modal-content {
        display: flex;
        flex-direction: column;
        padding: 0;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 15px;
        overflow: hidden;
        box-shadow:
            rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
            rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
            rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;

            &.size-sm{
                 width: 300px;
            }
            &.size-md{
                 width: 500px;
                }
            &.size-lg{
                width: 800px;
                
            }
            &.size-full{
                width: 90dvw;
            }
    }
    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 1em 0.5em;
        background-color: var(--bg-primary);
        height: 3.5em;
        color: var(--text-primary);
        border-bottom: 1px solid var(--border-color);

        & .close-btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 99rem;
            color: #a2a3a4;
            background-color: transparent;
            cursor: pointer;
            transition: var(--transition-out);
            &::after {
                content: "✖"
            }
            &:hover {
                transition:var(--transition-in);
                background-color: var(--border-color);
                color: black;
            }
        }
    }
    .modal-body {
        padding: 1.5em;
    }
    .modal-footer {
        background-color: var(--bg-primary);
        border-top: 1px solid var(--border-color);
        padding:0.5em 1em;
        text-align: right;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 0.5em;
        height: auto;
    }


</style>