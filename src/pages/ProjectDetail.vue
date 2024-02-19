<script>
import axios from 'axios';
// import NotFound from './NotFound.vue';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            projectNotFound: false,
            startUrl: 'http://127.0.0.1:8000',
            apiUrls: {
                projects: '/api/projects',
            }
        }
    },
    // components: {
    //     NotFound,
    // },

    methods: {
        getProject() {
            axios
                .get(this.startUrl + this.apiUrls.projects + '/' + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.result;
                    if (!this.project || Object.keys(this.project).length === 0) {
                        this.projectNotFound = true;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.projectNotFound = true;
                });
        }
    },
    created() {
        console.log(this.$route);
        this.getProject();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getProject();
            }
        );
    },
}
</script>

<template>
    <div class="container">
        <div v-if="!projectNotFound" class="mt-3 mb-5">
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

        <div v-else>
            <!-- Reindirizzamento alla pagina "not found" -->

            <div class="py-3">
                <p><strong>The selected project does not exist.</strong></p>
                <p class="leader"><router-link :to="{ name: 'projects' }">Back to
                        Projects</router-link></p>
            </div>
        </div>

    </div>
</template>

<style></style>