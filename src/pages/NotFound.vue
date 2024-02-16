<script>
export default {
    name: 'NotFound',
}
</script>

<template>
    <div class="not-found-container d-flex justify-content-center align-items-center">
        <div class="not-found-content text-center text-white">
            <h1 class="display-3">Error 404</h1>
            <p class="display-6">Page not found</p>
            <p class="leader"><router-link :to="{ name: 'home' }" class="text-white">Torna alla HomePage</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.not-found-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999;
}

.not-found-content {
    max-width: 600px;
    padding: 20px;
}
</style>