<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="nav-bar">
        <ul>
            <li class="link"><router-link class="link"
                             to="/">Home</router-link></li>
            <li class="link"><router-link class="link"
                             to="/movies">Movies</router-link></li>
            <li class="link"><router-link class="link"
                             :to="{ name: 'create' }">Create Movie</router-link></li>

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

            transition: all ease-in 100ms;
            
            a {
                cursor: pointer;
                background: transparent;
                opacity: 0.5;
                border-radius: 5px;
                text-decoration: none;
                padding: 0.25em 0.66em;
                
                &.router-link-active,
                &:hover {
                    color: black;
                    background: rgba(255, 255, 255, 0.33);
                    opacity: 1;
                }
            }
        }
    }
}
</style>