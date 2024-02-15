<script>
export default {
    name: 'Main',
    props: [
        'projects',
    ]
};
</script>

<template>
    <main>
        <div class="container py-3">
            <div class="py-3">
                <h3>Projects List</h3>
            </div>

            <div class="row">
                <div class="col col-md-4 g-3" v-for="project in projects">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title custom-h-h4">{{ project.title }}</h4>
                            <p class="card-text"><strong>Visibility:</strong> {{ project.visibility }}</p>
                            <a href="#" class="card-link">Card link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.custom-h-h4 {
    height: 55px !important;
}
</style>