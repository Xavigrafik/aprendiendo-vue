<script setup>
// Por ahora solo necesitamos saber si se muestra o no
defineProps({
    open: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);
</script>

<template>
    <Teleport to="body">
        <div v-if="open" class="modal-overlay" @click.self="emit('close')">
            <div class="modal-content">
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
        </div>
    </Teleport>
</template>

<style>

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
        width: 500px;
        margin: 0 auto;
        border-radius: 10px;
        overflow: hidden;
        box-shadow:
            rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
            rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
            rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
    }
    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 0.5em;
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
            &::after {
                content: "✖"
            }
            &:hover {
                background-color: #d2d3d4;
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
        padding: 0 1em;
        height: auto;
    }


</style>