<script>
import '../assets/scss/partials/variables.scss';

export default {
    name: 'Header',
};
</script>

<template>
    <header class="bg-custom-h-f">
        <div class="container d-flex justify-content-between py-3 align-items-center">
            <div class="col-2">Logo</div>
            <div>
                <h1>
                    Laravel-ViteVue Boolfolio
                </h1>
            </div>
            <nav class="col-2">
                <ul class="list-unstyled m-0 p-0 gap-4 d-flex">
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'projects' }">Projects</router-link></li>
                    <li><router-link :to="{ name: 'about' }">About</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss"></style>