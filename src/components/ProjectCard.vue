<script>
import '../assets/scss/partials/variables.scss';

export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },
    computed: {
        formattedTechnologies() {
            if (this.project.technologies.length > 0) {
                return this.project.technologies.map(technology => technology.title).join(', ');
            } else {
                return '/';
            }
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title custom-h-h4">{{ project.title }}</h4>
            <p class="card-text"><strong>Visibility:</strong> {{ project.visibility }}</p>
            <p class="card-text"><strong>Type:</strong> {{ project.type.title }}</p>
            <p class="card-text custom-h-h4"><strong>Technologies:</strong>
                {{ formattedTechnologies }}
            </p>
            <!-- <a href="#" class="card-link">Card link</a> -->
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                class="btn btn-primary btn-sm">Details</router-link>
        </div>
    </div>
</template>

<style scoped></style>