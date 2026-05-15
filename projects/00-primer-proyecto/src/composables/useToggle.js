// src/composables/useToggle.js
import { ref } from 'vue';

export function useToggle(initialState = false) {
  // Creamos el estado interno
  const value = ref(initialState);

  // Creamos las funciones para manipular ese estado
  const open = () => {
    value.value = true;
  };

  const close = () => {
    value.value = false;
  };

  const toggle = () => {
    value.value = !value.value;
  };

  // Devolvemos tanto el estado como las funciones para que el componente las use
  return {
    value,
    open,
    close,
    toggle
  };
}