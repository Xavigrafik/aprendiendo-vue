// stores/userStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
    const users     = ref([]);
    const isLoading = ref(false);
    const error     = ref(null);

    const totalUsers    = computed(() => users.value.length);
    const totalBizUsers = computed(() => users.value.filter(u => u.email.endsWith('.biz')).length);

    async function fetchUsers() {
        isLoading.value = true;
        error.value = null;
        try {
            const res  = await fetch('https://jsonplaceholder.typicode.com/users');
            users.value = await res.json();
        } catch (e) {
            error.value = e.message;
        } finally {
            isLoading.value = false;
        }
    }

    function deleteUser(id) {
        users.value = users.value.filter(u => u.id !== id);
    }

    return { users, isLoading, error, totalUsers, totalBizUsers, fetchUsers, deleteUser };
});