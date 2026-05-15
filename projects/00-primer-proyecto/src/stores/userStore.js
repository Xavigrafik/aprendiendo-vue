import { ref, computed, readonly } from 'vue';

// El estado vive aquí fuera, persistente mientras la web esté abierta
const users = ref([]);
const isLoading = ref(false);
const error = ref(null);
const isInitialized = ref(false); // Para saber si ya hicimos el fetch alguna vez

export function useUserStore() {
    const API_URL = "https://jsonplaceholder.typicode.com/users";

    const fetchUsers = async () => {
        console.log('---> fetching users IN');
        // Si ya tenemos los datos, no volvemos a llamar a internet (Caché inteligente)
        if (isInitialized.value) return;

        try {
            isLoading.value = true;
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Error al traer usuarios');

            users.value = await response.json();
            isInitialized.value = true; // Marcamos como inicializado
        } catch (err) {
            error.value = err.message;
        } finally {
            setTimeout(() => {
            isLoading.value = false;
                console.log("Carga finalizada visualmente");
            }, 100);
        }
    };

    const deleteUser = (id) => {
        users.value = users.value.filter(user => user.id !== id);
    };

    const totalBizUsers = computed(() => {
        return users.value.filter(user => user.email?.endsWith('.biz')).length;
    });

    const totalUsers = computed(() => users.value.length);

    return {
        // Exportamos como readonly para que las vistas no muten el array directamente sin usar deleteUser
        users: readonly(users),
        isLoading: readonly(isLoading),
        error: readonly(error),
        totalUsers,
        totalBizUsers,
        fetchUsers,
        deleteUser
    };
}