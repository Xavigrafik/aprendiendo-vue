<script setup>

    import { ref } from "vue";
    import { onMounted, onUnmounted } from "vue";
    import { useUserStore } from "@/stores/userStore";

    const activeDropdown = ref(null);
    const toggleDropdown = (menuName) => {
        if (activeDropdown.value === menuName) {
            activeDropdown.value = null; // Si ya estaba abierto, lo cierra
        } else {
            activeDropdown.value = menuName; // Abre el seleccionado
        }
    };

    // Para el clic de fuera:
    const closeDropdown = (e) => {
        if (!e.target.closest('.nav-dropdown-container')) {
            activeDropdown.value = null;
        }
    };

    const userStore = useUserStore();
    onMounted(() => {
        window.addEventListener("click", closeDropdown);
        userStore.fetchUsers();
    });
    onUnmounted(() => {
        window.removeEventListener("click", closeDropdown);
    });
</script>

<template>
    <div class="nav-bar">
        <ul>

            <li class="link">
                <router-link class="link" to="/">Home</router-link>
            </li>

            <li class="nav-dropdown-container">
                <button @click.stop="toggleDropdown('movies')" class="dropdown-trigger"
                    :class="{ 'is-active': activeDropdown === 'movies' }">
                    Movies <span class="caret-icon"></span>
                </button>
                <ul v-if="activeDropdown === 'movies'" class="dropdown-menu">
                    <li>
                        <router-link class="link" to="/movies">Movies</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/movies/1">Movie 1</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: 'create' }">Create Movie</router-link>
                    </li>
                </ul>
            </li>

             <li class="link">
                <router-link to="/users">Users {{ userStore.totalUsers }}</router-link>
            </li>
             
            <li class="link">
                <router-link to="/form">Form</router-link>
            </li>

            <li class="link">
                <router-link to="/design-sistem">Design System</router-link>
            </li>
            <li class="link">
                <router-link to="/to-do">To-Do</router-link>
            </li>
            <li class="link">
                <router-link to="/form-preview">Form Preview</router-link>
            </li>


        </ul>
    </div>
</template>

<style lang="scss" scoped>
// 🎨 Paleta de diseño unificada
$color-primary: #16c0b0;
$color-secondary: #84cf6a;
$text-dark: #000000;

.nav-bar {
  background: linear-gradient(-90deg, $color-primary, $color-secondary);
  margin-bottom: 25px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  padding: 0; // Dejamos que el ul gestione el espaciado interno

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md) var(--space-sm);
    padding: var(--space-md);
    align-items: center;
    justify-content: center;
    margin: 0;

    li.link {
      display: flex;
      align-items: center;

      a,
      a:visited {
        color: $text-dark;
        cursor: pointer;
        background-color: transparent;
        opacity: 0.66;
        border-radius: 5px;
        text-decoration: none;
        padding: 0.25em 0.66em;
        font-size: 0.95rem;
        font-weight: 500;

        // Transición de salida (suave)
        transition:
          opacity 300ms ease-out,
          background-color 300ms ease-out;

        &.router-link-active {
          background-color: oklch(100% 0 0 / 0.66);
          opacity: 1;
          pointer-events: none;
        }

        // Transición de entrada (rápida)
        &:hover {
          opacity: 1;
          background-color: oklch(100% 0 0 / 0.33);
          transition:
            opacity 100ms ease-in,
            background-color 100ms ease-in;
        }
      }
    }
  }
}

// 🏢 ARQUITECTURA DEL DESPLEGABLE (Dropdown)
.nav-dropdown-container {
  position: relative; // Ancla el menú absoluto justo aquí abajo

  .dropdown-trigger {
    color: $text-dark;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0.25em 0.66em;
    border-radius: 5px;
    opacity: 0.66;
    transition:
      opacity 300ms ease-out,
      background-color 300ms ease-out;

    &:hover,
    &.is-active {
      opacity: 1;
      background-color: oklch(100% 0 0 / 0.33);
      transition:
        opacity 100ms ease-in,
        background-color 100ms ease-in;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background-color: var(
      --bg-card,
      #ffffff
    ); // Fondo blanco limpio para lectura
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: var(--radius-md, 8px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
    list-style: none;
    padding: var(--space-sm);
    min-width: 190px;
    z-index: 100;
    display: block; // Rompe el flex horizontal del padre principal

    li {
      margin: 0;
      padding: 0;
    
        & .link {
        display: block;
        padding: var(--space-sm) var(--space-md);
        color: var(--text-color, #333333);
        text-decoration: none;
        font-size: 0.9rem;
        text-align: left;
        border-radius: calc(var(--radius-md, 8px) - 2px);
        transition: background-color 0.15s;
    
        &:hover {
        background-color: var(--border-color, #f5f5f5);
        color: $color-primary; // Tinte interactivo usando tu color verde marino
        }
    }
    }
  }

}

// 📐 ICONO CARET EN SVG NATIVO
.caret-icon {
  width: 12px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000000' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.2s ease;
  opacity: 0.7;
}

// Rotación fluida cuando cambia la clase dinámica
.is-active .caret-icon {
  transform: rotate(180deg);
}
</style>
