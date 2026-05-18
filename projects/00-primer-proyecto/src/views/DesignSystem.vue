<!-- npm install vitest @vue/test-utils jsdom -D -->

<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import Panel from '@/components/panels/Panel.vue';

const counter = ref(1);
</script>

<template>

    <!-- <Panel title="Gestión de Cine" :depth="0">
      
      <p>Bienvenido al panel principal.</p>
      
      <Panel title="Configuración de Películas" :depth="1">
        <MyButton variant="primary">Escanear Carpeta</MyButton>
        
        <Panel title="Metadatos Avanzados" :depth="2">
          <div class="info-grid">
            <span>API Status: OK</span>
            <MyButton variant="outline">Refresh</MyButton>
          </div>
        </Panel>

      </Panel>

      <Panel title="Usuarios VIP" :depth="1">
        <p>Lista de usuarios...</p>
      </Panel>

    </Panel> -->

    <h1>Welcome to the Design System Page</h1>


    <div class="grid-container ">
        <div class="col-12">

            <Panel title="Botones"
                   :depth="0">

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
                    </section>

                    <section class="block">
                        <h5>Loading :</h5>
                        <Button variant="primary"
                                :loading="true">Primary</Button>
                        <Button variant="secondary"
                                :loading="true">Secondary</Button>
                        <Button variant="tertiary"
                                :loading="true">Tertiary</Button>
                        <Button variant="outline"
                                :loading="true">Outline</Button>
                        <Button variant="danger"
                                :loading="true">Danger</Button>
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

            <Panel title="Columns"
                   :depth="0">
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
}
</style>