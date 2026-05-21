<script setup>
    defineProps({
        title: {
            type: String,
            default: 'Nuevo Panel'
        },
        depth: {
            type: Number,
            default: 0
        }
    });
</script>

<template>
    <section class="panel"
             :style="{ '--level': depth }">
        <header class="panel-header">
            <h3 class="panel-title">{{ title }}</h3>
        </header>

        <div class="panel-content">
            <slot />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.panel {

    // Ajustamos el color de fondo basado en la profundidad (depth) usando OKLCH
    --bg-color: oklch(from #f0f4f8 calc(l - (var(--level) * 0.0066)) c h);

    background-color: var(--bg-color);
    border: 1px solid oklch(from var(--bg-color) calc(l - 0.1) c h);
    border-radius: 8px;
    margin: 1rem 0;
    width: 100%;
    overflow: hidden;
    transition: transform 0.2s ease;

    &-header {
        padding: 0.75rem 1rem;
        background-color: oklch(from var(--bg-color) calc(l - 0.02) c h);
        border-bottom: 1px solid oklch(from var(--bg-color) calc(l - 0.05) c h);
    }

    &-title {
        margin: 0;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.8;
    }

    &-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        // Indentación visual para las cajas hijas
        padding-left: 1.5rem;
    }

    // Efecto hover sutil
    &:hover {
        border-color: #42b883;
    }
}
</style>