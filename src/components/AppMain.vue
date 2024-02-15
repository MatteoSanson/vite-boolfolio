<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'Main',
    props: [
        'projects',
    ],
    components: {
        ProjectCard,
    },
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
                    <ProjectCard :project="project" />
                </div>
            </div>


        </div>
    </main>
</template>

<style scoped></style>