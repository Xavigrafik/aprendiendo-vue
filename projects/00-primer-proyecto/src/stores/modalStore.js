// type :
//  info: Muestra un texto plano (modalStore.message) con un botón de "Aceptar".
// confirm: Muestra un texto plano (modalStore.message) con botones de "Confirmar" y "Cancelar".
// custom: Muestra un bloque de HTML inyectado como texto a través de un string (modalStore.customHtml).
// component: Renderiza un componente de Vue real dinámicamente (modalStore.component).


import { defineStore } from 'pinia';
import { ref, markRaw } from 'vue';

export const useModalStore = defineStore('modal', () => {
    const isOpen = ref(false);
    const type = ref('info'); // 'info', 'confirm', o 'custom'
    const title = ref('');
    const message = ref(''); // Para texto plano (info/confirm)
    const confirmBtnText = ref('') 
    const cancelBtnText = ref('') 
    const customHtml = ref(''); // Para el modal con HTML libre
    const component = ref(null);
    
    // Guardamos las funciones que ejecutará el modal al hacer clic
    const onConfirmCallback = ref(null);
    const onCancelCallback = ref(null);

    // 📢 Función única para abrir cualquier tipo de modal
    function open(options) {
        console.log('options: ', options);
        
        type.value = options.type || 'info';
        title.value = options.title || '';
        message.value = options.message || '';
        customHtml.value = options.customHtml || '';

        component.value = options.component ? markRaw(options.component) : null;
        
        confirmBtnText.value = options.confirmBtnText || 'Ok';
        onConfirmCallback.value = options.onConfirm || null;
        
        cancelBtnText.value = options.cancelBtnText || 'Cancelar';
        onCancelCallback.value = options.onCancel || null;
        
        isOpen.value = true;
    }

    // 🔒 Funciones de cierre y resolución
    function close() {
        isOpen.value = false;
        onConfirmCallback.value = null;
        onCancelCallback.value = null;
    }

    function handleConfirm() {
        if (onConfirmCallback.value) onConfirmCallback.value();
        close();
    }

    function handleCancel() {
        if (onCancelCallback.value) onCancelCallback.value();
        close();
    }

    return {
        isOpen, type, title, message, customHtml, component,
        open, close,
        handleConfirm: () => { if (onConfirmCallback.value) onConfirmCallback.value(); close(); },
        handleCancel: () => { if (onCancelCallback.value) onCancelCallback.value(); close(); }
    };
});