<script>
import '../assets/scss/partials/variables.scss';

export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title custom-h-h4">{{ project.title }}</h4>
            <p class="card-text"><strong>Visibility:</strong> {{ project.visibility }}</p>
            <p class="card-text"><strong>Type:</strong> {{ project.type.title }}</p>
            <p class="card-text custom-h-h4"><strong>Technologies:</strong>{{ project.technologies.length > 0 ?
                ' ' : ' /' }}
                <span v-for="(technology, index) in project.technologies" :key="index">
                    {{ technology.title }}{{ index === project.technologies.length - 1 ? '' : ', ' }}
                </span>
            </p>
            <a href="#" class="card-link">Card link</a>
        </div>
    </div>
</template>

<style scoped></style>