<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import Button from '../components/Button.vue';

const userStore = useUserStore();
const { users, isLoading, error, totalUsers, totalBizUsers } = storeToRefs(userStore);
const { deleteUser } = userStore;

onMounted(() => {
    userStore.fetchUsers();
});
</script>

<template>
    <div class="row centered">
        <div class="col-10">
            <div class="users-container">
                <h2>Directorio de Usuarios: {{ totalUsers }}</h2>
                <p class="badge">Usuarios .biz: {{ totalBizUsers }}</p>

                <div v-if="isLoading">Cargando usuarios...</div>
                <div v-else-if="error">Error: {{ error }}</div>

                <ul v-else class="users-list">
                    <li v-for="user in users" :key="user.id" class="user-card">
                        <div class="user-info">
                            <h3>{{ user.name }}</h3>
                            <span>{{ user.email }}</span>
                        </div>
                        <Button variant="secondary" size="xs" :to="{ name: 'user', params: { id: user.id } }">
                            Ver {{ user.id }}
                        </Button>
                        <Button variant="danger" size="xs" @click="deleteUser(user.id)">
                            Delete
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style>
    .users-container {}

    .users-list {
        display: grid;
        gap: var(--space-md);
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        ;
        grid-template-rows: repeat(3, auto);

        & .user-card {
            background-color: #fff;
            border: 1px solid var(--border-color);
            margin-bottom: var(--space-sm);
            padding: var(--space-sm) var(--space-md);
            padding-right: 5px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: var(--space-sm);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-md);

            & .user-info {
                margin-right: auto;
            }



        }
    }
</style>
