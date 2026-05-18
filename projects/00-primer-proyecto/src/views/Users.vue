<script setup>

import { ref, computed, onMounted, toRefs } from 'vue';

import { useUserStore } from '@/stores/userStore';
import Button from '../components/Button.vue';
const userStore = useUserStore();
const { users, isLoading, error, totalUsers, totalBizUsers, deleteUser } = toRefs(userStore);

onMounted(() => {
    userStore.fetchUsers();
});
</script>

<template>
    <div class="grid-container">
        <div class="col-10">


            <div class="users-container">

                <p v-if="isLoading">Cargando...</p>

                <h2>Directorio de Usuarios: {{ totalUsers }}</h2>


                <p class="badge">Usuarios con cuentas comerciales (.biz): {{ totalBizUsers }}</p>

                <div v-if="isLoading">Cargando usuarios...</div>
                <div v-else-if="error">Hubo un error: {{ error }}</div>

                <ul v-else
                    class="users-list">
                    <li v-for="user in users"
                        :key="user.id"
                        class="user-card">

                        <div class="user-info">
                            <h3>{{ user?.name }}</h3>
                            <span>Email: {{ user?.email }}</span>
                        </div>

                        <Button variant="danger"
                                size="xs"
                                @click="deleteUser(user.id)">Delete</Button>
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
            border: 1px solid red;
        }

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
                transition: var(--transition-in);
                background-color: var(--border-color);
                color: black;
            }
        }

    }
}
</style>
