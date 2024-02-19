<script>
import axios from 'axios';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            startUrl: 'http://127.0.0.1:8000',
            apiUrls: {
                projects: '/api/projects',
            }
        }
    },

    methods: {
        getProject() {
            axios
                .get(this.startUrl + this.apiUrls.projects + '/' + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.result;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    created() {
        // console.log(this.$route);
        this.getProject();
    },
}
</script>

<template>
    <div class="container">
        <div class="mt-3 mb-5">
            <div class="d-flex gap-2 align-items-center">
                <h2>Project #{{ project.id }} -</h2>
                <h1>{{ project.title }}</h1>
            </div>
            <hr>
            <div class="py-3">
                <span class="badge p-2"
                    :class="{ 'bg-success': project.visibility === 'public', 'bg-warning': project.visibility === 'private' }">
                    {{ project.visibility }}
                </span>
            </div>
            <div class="py-3">
                <p><strong>Type:</strong> {{ project.type.title }}</p>
            </div>
            <div class="py-2">
                <p>
                    <strong>Technologies:</strong>
                    <span v-if="project.technologies && project.technologies.length > 0">
                        <ul>
                            <li v-for="technology in project.technologies" :key="technology.id">{{ technology.title }}</li>
                        </ul>
                    </span>
                    <span v-else> /</span>
                </p>
            </div>
        </div>

    </div>
</template>

<style></style>