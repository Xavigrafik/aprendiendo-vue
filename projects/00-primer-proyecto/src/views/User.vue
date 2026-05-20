<script setup>
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '@/stores/userStore';
    import Button from '@/components/Button.vue';

    const route = useRoute();
    const router = useRouter();

    const userStore = useUserStore();
    const { users } = storeToRefs(userStore);

    // Busca en la store sin hacer un fetch extra
    const user = computed(() => users.value.find(u => u.id === Number(route.params.id)));
</script>

<template>
    <div class="user-view">

        <Button variant="outline" @click="router.back()">
            ← Volver 
        </Button>

        <div v-if="!user">Usuario no encontrado.</div>

        <div v-else class="user-detail">
            <div class="user-avatar">
                {{ user.name.charAt(0).toUpperCase() }}
            </div>
            <h2>{{ user.name }}</h2>
            <p class="username">@{{ user.username }}</p>
            <a :href="`mailto:${user.email}`" class="email">{{ user.email }}</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .user-view {
        max-width: 480px;
        margin: 2rem auto;
        padding: 2rem;
    }

    .user-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1.5rem;
        text-align: center;
        background-color: #fff;
        padding: 1em;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-md);
        border-radius: 1em;
    }

    .user-avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: oklch(69% 0.14 149);
        color: white;
        font-size: 2rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h2 {
        font-size: 1.5rem;
        margin: 0;
    }

    .username {
        color: var(--color-muted, #6b7280);
        margin: 0;
    }

    .email {
        color: oklch(69% 0.14 149);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
</style>