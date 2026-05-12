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
                Submit primary
            </Button>
            <Button type="submit" variant="secondary">
                Submit secondary
            </Button>

            <Button type="submit" variant="tertiary">
                Submit tertiary
            </Button>

            <Button type="submit" variant="outline">
                Cancel outline
            </Button>
        </div>
    </Panel>

</template>

<style>
    
</style>