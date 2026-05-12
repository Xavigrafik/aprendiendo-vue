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

  


    <Panel title="Botones" :depth="0">

        <div style="display:flex; gap:0.5em">
            <Button type="submit" variant="primary">
                Button primary
            </Button>
            <Button type="submit" variant="secondary">
                Button Secondary
            </Button>

            <Button type="submit" variant="tertiary">
                Button Tertiary
            </Button>

            <Button type="submit" variant="outline">
                Button Outline
            </Button>
        </div>
    </Panel>

    <Panel title="Columns" :depth="0">
            <div class="grid showCols">
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

</template>

<style>

    .showCols.grid [class*="col-"]{ background-color: #fff; outline:1px solid var(--border-color); }

    
</style>