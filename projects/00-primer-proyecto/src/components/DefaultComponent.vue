<script setup>
import { ref, computed, onMounted, watch } from 'vue';


// --- ESTADO REACTIVO ---
const contador = ref(0);
const nombreUsuario = ref('');

// --- PROPIEDADES COMPUTADAS ---
const esNumeroAlto = computed(() => contador.value >= 10);
const tipoNumero = computed(() => (contador.value % 2 === 0 ? 'Par' : 'Impar'));

// --- MÉTODOS ---
const incrementar = () => {
    contador.value++;
};

const resetear = () => {
    contador.value = 0;
};

// --- OBSERVADORES ---
watch(contador, (nuevoValor) => {
    if (nuevoValor > 20) {
        console.warn('Límite alcanzado, reseteando...');
        resetear();
    }
});

onMounted(() => {
    console.log('Componente listo y montado.');
});
</script>

<template>
    <section class="contenedor-aprendizaje">
        <header class="cabecera">
            <h1>Estudiante: {{ nombreUsuario }}</h1>
            <p class="subtitulo">Explorando la reactividad de Vue 3</p>
        </header>

        <main class="panel-control">
            <div class="display-contador">
                <span class="etiqueta">Valor actual:</span>
                <strong :class="{ 'alerta': esNumeroAlto }">{{ contador }}</strong>
            </div>

            <div class="info-adicional">
                <p>El número es: <span>{{ tipoNumero }}</span></p>
                <p v-if="esNumeroAlto"
                   class="mensaje-aviso">⚠️ Has superado la decena</p>
            </div>

            <nav class="acciones">
                <button @click="incrementar"
                        class="btn-principal">Incrementar</button>
                <button @click="resetear"
                        class="btn-secundario">Resetear</button>
            </nav>
        </main>

        <footer class="formulario-edicion">
            <label for="input-nombre">Editar nombre:</label>
            <input id="input-nombre"
                   v-model="nombreUsuario"
                   type="text"
                   placeholder="Escribe tu nombre..." />
        </footer>
    </section>
</template>

<style lang="scss" scoped>
.contenedor-aprendizaje {
    max-width: 40%;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 12px;
    font-family: sans-serif;
    color: #333;

    .cabecera {
        text-align: center;
        margin-bottom: 24px;

        h1 {
            color: #42b883;
            margin: 0;
        }

        .subtitulo {
            color: #666;
            font-size: 0.9rem;
        }
    }

    .panel-control {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        text-align: center;

        .display-contador {
            font-size: 1.5rem;
            margin-bottom: 15px;

            strong {
                font-size: 3rem;
                transition: color 0.3s;

                &.alerta {
                    color: #e74c3c;
                }
            }
        }

        .mensaje-aviso {
            color: #e67e22;
            font-weight: bold;
            font-size: 0.8rem;
        }
    }

    .acciones {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.8;
            }
        }

        .btn-principal {
            background: #42b883;
            color: white;
        }

        .btn-secundario {
            background: #35495e;
            color: white;
        }
    }

    .formulario-edicion {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px dashed #ccc;

        label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.8rem;
        }

        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
    }
}
</style>