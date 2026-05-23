
<script setup>
    import { ref } from "vue";
    import Panel from '@/components/panels/Panel.vue';
    import Button from '@/components/Button.vue';
    import addTaskForm from '@/components/todo/addTaskForm.vue';

    import { useModalStore } from '@/stores/modalStore';
    const modalStore = useModalStore();

    
    const mostrarAlerta = () => {
        modalStore.open({
            type: 'info',
            title: '¡Operación Completada!',
            message: 'Tu tarea ha sido guardada con éxito en el servidor.'
        });
    };

    const comprobarEliminacion = () => {
        modalStore.open({
            type: 'confirm',
            title: '¿Eliminar tarea?',
            message: `Estás a punto de...X  ¿Proceder?`,
            onConfirm: () => {
                // Se ejecuta si el usuario pulsa "Confirmar"
                console.log("El usuario confirmó");
            },
            onCancel: () => {
                console.log("El usuario canceló la acción");
            }
        });
    };

    const abrirInfoDiseno = () => {
        modalStore.open({
            type: 'custom',
            title: 'Guía de Figma',
            customHtml: `
                <div style="text-align: center;">
                    <h3>Titulo</h3>
                    <p>Escanea el código QR o entra al enlace para ver los mockups:</p>
                    <div style="padding:2em;background-color:red; color:white;">Caja roja</div>
                </div>
            `
        });
    };
    const º = () => {
        modalStore.open({
            type: 'component',
            title: 'Inyecta un component',
            component: addTaskForm,
            componentProps: { }
        });
    };

</script>

<template>

    <h1>Welcome to the Design System Page</h1>


    <div class="grid-container ">
        <div class="col-12">

            <Panel title="Modales" :depth="0">
                <section class="block">
                    <Button @click="mostrarAlerta">Info</Button>
                    <Button @click="comprobarEliminacion">Confirm</Button>
                    <Button @click="abrirInfoDiseno">Custom</Button>
                    <Button @click="abrirComponente">Component</Button>
                </section>
            </Panel>

            <Panel title="Botones" :depth="0">

                <div class="btn-docs">

                    <section class="block">
                        
                        <h5>Sizes :</h5>
                        <Button size="xs">Button xs</Button>
                        <Button size="sm">Button sm</Button>
                        <Button size="md">Button md</Button>
                        <Button size="lg">Button lg</Button>
                    </section>

                    <section class="block">
                        
                        <h5>Variants :</h5>
                        
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="tertiary">Tertiary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="icon">★</Button>
                        
                        <h5>Pill :</h5>
                        <Button pill variant="primary">Primary</Button>
                        <Button pill variant="secondary">Secondary</Button>
                        <Button pill variant="tertiary">Tertiary</Button>
                        <Button pill variant="outline">Outline</Button>
                        <Button pill variant="danger">Danger</Button>
                        <Button pill variant="icon">★</Button>
                        
                        <h5>Variants hover :</h5>
                        <Button class="is-hovered" variant="primary">Primary</Button>
                        <Button class="is-hovered" variant="secondary">Secondary</Button>
                        <Button class="is-hovered" variant="tertiary">Tertiary</Button>
                        <Button class="is-hovered" variant="outline">Outline</Button>
                        <Button class="is-hovered" variant="danger">Danger</Button>
                        <Button class="is-hovered" variant="icon">★</Button>
                        
                        <h5>Variants active :</h5>
                        <Button class="active" variant="primary">Primary</Button>
                        <Button class="active" variant="secondary">Secondary</Button>
                        <Button class="active" variant="tertiary">Tertiary</Button>
                        <Button class="active" variant="outline">Outline</Button>
                        <Button class="active" variant="danger">Danger</Button>
                        <Button class="active" variant="icon">★</Button>
                    </section>

                    <section class="block">
                        
                        <h5>Loading :</h5>
                        <Button variant="primary" :loading="true">Primary</Button>
                        <Button variant="secondary" :loading="true">Secondary</Button>
                        <Button variant="tertiary" :loading="true">Tertiary</Button>
                        <Button variant="outline" :loading="true">Outline</Button>
                        <Button variant="danger" :loading="true">Danger</Button>
                    </section>

                    <section class="block">
                        
                        <h5>Disabled :</h5>
                        <Button variant="primary" :disabled="true">Primary</Button>
                        <Button variant="secondary" :disabled="true">Secondary</Button>
                        <Button variant="tertiary" :disabled="true">Tertiary</Button>
                        <Button variant="outline" :disabled="true">Outline</Button>
                        <Button variant="danger" :disabled="true">Danger</Button>
                    </section>

                </div>
            </Panel>

            <Panel title="Colors" :depth="3">
                <section class="block">

                    <div class="color" style="background-color:var(--color-primary)">primary</div>
                    <div class="color" style="background-color:var(--color-primary-dark)">primary-dark</div>
                    <div class="color" style="background-color:var(--color-secondary)">secondary</div>
                    <div class="divider"></div>
                    <div class="color" style="background-color:var(--color-success)">success</div>
                    <div class="color" style="background-color:var(--color-error)">error</div>
                    <div class="color" style="background-color:var(--color-warning)">warning</div>
                    <div class="color" style="background-color:var(--color-info)">info</div>
                    <div class="divider"></div>

                    <div class="color" style="background-color:var(--color-white)">white</div>
                    <div class="color" style="background-color:var(--color-gray-100)">gray-100</div>
                    <div class="color" style="background-color:var(--color-gray-500)">gray-500</div>
                    <div class="color" style="background-color:var(--color-gray-900)">gray-900</div>
                    <div class="color" style="background-color:var(--color-black)">black</div>

                </section>
            </Panel>

            <Panel title="Columns" :depth="0">
                <div class="grid-container showCols">
                    <div class="col-12">col-12</div>

                    <div class="col-6">col-6</div>
                    <div class="col-6">col-6</div>

                    <div class="col-8">col-8</div>
                    <div class="col-4">col-4</div>

                    <div class="col-4">col-4</div>
                    <div class="col-4">col-4</div>
                    <div class="col-4">col-4</div>

                    <div class="col-3">col-3</div>
                    <div class="col-3">col-3</div>
                    <div class="col-3">col-3</div>
                    <div class="col-3">col-3</div>


                    <div class="col-2">col-2</div>
                    <div class="col-2">col-2</div>
                    <div class="col-2">col-2</div>
                    <div class="col-2">col-2</div>
                    <div class="col-2">col-2</div>
                    <div class="col-2">col-2</div>

                </div>
            </Panel>

        </div>
    </div>
</template>

<style>
    .showCols.grid-container [class*="col-"] {
        background-color: #fff;
        outline: 1px solid var(--border-color);
    }

    .block {
        display: flex;
        gap: 0.5em;
        align-items: baseline;
        justify-content: flex-start;
        border-bottom: 1px solid var(--border-color);
        flex-wrap: wrap;
        margin-bottom: 2.5rem;
        padding-bottom: 0.5rem;

        h5 {
            flex: 1 1 100%;
            padding-right: 1rem;
            margin: 0;
        }

        .divider {
            border: 1px solid var(--border-color);
            flex: 0 0 100%;
        }

        .color {
            width: 100px;
            height: 100px;
            display: flex;
            border-radius: var(--radius-sm);
            align-items: flex-end;
            justify-content: center;
            color: #fff;
            padding-bottom: 0.5rem;
        }
    }
</style>