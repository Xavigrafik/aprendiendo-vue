<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="nav-bar">
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Proyectos</a></li>
            
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

            & li{
                
                opacity: 0.5;
                cursor: pointer;
                padding: 0.25em 0.66em;
                border-radius: 5px;
                background: transparent;
                transition: all ease-in 100ms;

                a {
                    color: black;
                    text-decoration: none;
                }
                &:hover {
                    background: rgba(255, 255, 255, 0.33);
                    opacity: 1;
                }
            }
        }
    }

</style>