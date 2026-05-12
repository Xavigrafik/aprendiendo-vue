<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="nav-bar">
        <ul>
            <li class="link"><router-link class="link" to="/">Home</router-link></li>
            <li class="link"><router-link class="link" to="/movies">Movies</router-link></li>
            <li class="link"><router-link class="link" :to="{ name: 'create' }">Create Movie</router-link></li>
            <li class="link"><router-link class="link" to="/design-sistem">Design System</router-link></li>

        </ul>
    </div>
</template>
<style lang="scss" scoped>
$color1: #16c0b0;
$color2: #84cf6a;

.nav-bar {
    background: linear-gradient(-90deg, $color1 , $color2);
    min-height: 60px;
    margin-bottom: 25px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);

    & ul {
        list-style-type: none;
        display: flex;
        gap: 1em;
        padding: 1em;
        align-items: center;
        justify-content: center;

        & li {

            
            
            a, a:visited {
                color: black;
                cursor: pointer;
                background-color: transparent; // Usa la propiedad específica
                opacity: 0.66;
                border-radius: 5px;
                text-decoration: none;
                padding: 0.25em 0.66em;
                
                // SALIDA: Suave y específica (200ms - 300ms)
                transition: 
                    opacity 300ms ease-out, 
                    background-color 300ms ease-out;

                &.router-link-active {
                    background-color: oklch(100% 0 0 / 0.66); 
                    opacity: 1;
                    pointer-events: none; 
                }

                // ENTRADA: Rápida y eléctrica (100ms)
                &:hover {
                    color: black;
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
</style>