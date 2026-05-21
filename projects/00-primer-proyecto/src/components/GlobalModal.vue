<script setup>
    import { watch } from 'vue';
    import { useModalStore } from '@/stores/modalStore';
    import Button from '@/components/Button.vue';
    const modalStore = useModalStore();

    watch(
        () => modalStore.isOpen,
        (newValue) => {
            if (newValue) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    );
</script>

<template>
    <Teleport to="body">
        <div v-if="modalStore.isOpen" class="modal-overlay" @click="modalStore.handleCancel">
            <div class="modal-container" @click.stop>

                <header class="modal-header">
                    <h2>{{ modalStore.title }}</h2>
                    <button class="close-btn" @click="modalStore.handleCancel">✖</button>
                </header>

               <main class="modal-body">
                <p v-if="modalStore.type === 'info' || modalStore.type === 'confirm'">
                    {{ modalStore.message }}
                </p>

                <div v-else-if="modalStore.type === 'custom'" v-html="modalStore.customHtml"></div>

                <component 
                    v-else-if="modalStore.type === 'component'"
                    :is="modalStore.component" 
                    v-bind="modalStore.componentProps" ></component>

            </main>

                <footer class="modal-footer" v-if="modalStore.type !== 'component'">
                    <Button 
                        v-if="modalStore.type === 'info'" 
                        class="btn btn-primary" 
                        @click="modalStore.handleCancel"
                    >
                        {{ modalStore.cancelBtnText || 'Aceptar' }}
                    </Button>

                    <div v-if="modalStore.type === 'confirm'" class="buttons-group">
                        <Button @click="modalStore.handleConfirm">
                            {{ modalStore.confirmBtnText || 'Confirmar' }}
                        </Button>
                        <Button variant="outline" @click="modalStore.handleCancel">
                            {{ modalStore.cancelBtnText || 'Cancelar' }}
                        </Button>
                    </div>
                    
                    <Button 
                        v-if="modalStore.type === 'custom'" 
                        variant="outline"
                        @click="modalStore.handleCancel"
                    >
                        {{ modalStore.cancelBtnText || 'Cerrar' }}
                    </Button>

                    <!-- <Button 
                        v-if="modalStore.type === 'component'" 
                        variant="outline"
                        @click="modalStore.handleCancel"
                    >
                        {{ modalStore.cancelBtnText || 'Cerrar'   }}
                    </Button> -->

                </footer>

            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .modal-container {
        background: white;
        padding: 0;
        overflow: hidden;
        border-radius: var(--radius-md);
        min-width: 320px;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .modal-header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid var(--border-color);
        padding: var(--space-md) var(--space-xl);

        .close-btn {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 99rem;
            border-color: transparent;
            color: #a2a3a4;
            background-color: transparent;
            cursor: pointer;
            transition: var(--transition-out);

            // &::after {
            //     content: "✖"
            // }

            &:hover {
                transition: var(--transition-in);
                background-color: var(--border-color);
                color: black;
            }
        }
    }

    .modal-body {
        padding: var(--space-xl);
    }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        padding: var(--space-md) var(--space-xl);
        border-top: 1px solid var(--border-color);

        .buttons-group {
            display: flex;
            gap: 10px;
        }
    }
   
</style>