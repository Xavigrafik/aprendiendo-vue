import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    // 1. Estado: La fuente de la verdad
    state: () => ({
        name: 'Maquetador Senior',
        points: 0,
        loading: false
    }),

    // 2. Getters: Datos derivados (computados)
    getters: {
        isVip: (state) => state.points >= 10,
        doublePoints: (state) => state.points * 2
    },

    // 3. Actions: Lógica y cambios de estado
    actions: {
        increment() {
            this.points++;
        },
       reset() {
            console.log("Intentando resetear..."); // Debug rápido
            this.points = 0;
        },

        resetFullStore() {
            this.$reset();
        },
        /* 
        async fetchUserData() {
            this.loading = true;
            try {
                // Ejemplo de petición asíncrona
                const response = await fetch('/api/user');
                const data = await response.json();
                this.name = data.name;
            } finally {
                this.loading = false;
            }
        }
             */
    }
});