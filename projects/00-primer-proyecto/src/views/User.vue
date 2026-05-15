<script setup>
import { ref, computed, onMounted } from 'vue';
    
    import { useUserStore } from '@/stores/userStore';
    const userStore = useUserStore();
    onMounted(() => {
        userStore.fetchUsers();
    });
</script>

<template>
    <div class="users-container">
        <h2>Directorio de Usuarios: {{ userStore.totalUsers }}</h2>

        <p class="badge">Usuarios con cuentas comerciales (.biz): {{ userStore.totalBizUsers }}</p>

        <div v-if="userStore.isLoading">Cargando usuarios...</div>
        <div v-else-if="userStore.error">Hubo un error: {{ userStore.error }}</div>

        <ul v-else class="users-list">
            <li v-for="user in userStore.users"
                :key="user.id"
                class="user-card">
                <div>
                    <h3>{{ user.name }}</h3>
                    <span>Email: {{ user.email }}</span>
                </div>

                <button @click="userStore.deleteUser(user.id)">❌</button>
            </li>
        </ul>
    </div>
</template>

<style>
    .users-container {
        
    }
    .users-list {

       & > .user-card {
            background-color: #fff;
            border: 1px solid var(--border-color);
            margin-bottom: var(--space-sm);
            margin-right: var(--space-sm);
            padding: var(--space-sm) var(--space-md);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-md);
        }
    }
</style>