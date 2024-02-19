<script>
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
import axios from 'axios';
import store from '../store';

export default {
    name: 'ProjectList',
    data() {
        return {
            store,
            loading: false,
            currentPage: 1,
            dataResponse: {},
            errors: null,
            projects: [],
        }
    },
    components: {
        ProjectCard,
        AppLoader,
        ProjectSearch,
    },
    methods: {
        getProjects() {
            this.errors = null;
            this.loading = true;
            axios.get(this.store.api.startUrl + this.store.api.apiUrls.projects, {
                params: {
                    page: this.currentPage,
                    key: this.store.projects.searchKey,
                }
            }).then(response => {
                // console.log(response);
                this.dataResponse = response.data;
                // this.projects = response.data.results.data;
                console.log(this.dataResponse);
            }).catch(error => {
                console.log(error);
                this.dataResponse.results.data = [];
                console.log(error.response.data.message);
                this.errors = error.response.data.message;
            })
                .finally(() => { this.loading = false });
        },
        nextPage() {
            this.currentPage++;
            this.$router.push({
                name: 'projects', query: { page: this.currentPage },
            });
            this.getProjects();
        },
        prevPage() {
            this.currentPage--;
            this.$router.push({
                name: 'projects', query: { page: this.currentPage },
            });
            this.getProjects();
        },
    },
    created() {
        this.currentPage = this.$route.query?.page ?? 1;
        this.getProjects();

        // this.$watch(
        //     () => this.$route.query,
        //     (toParams, previousParams) => {
        //         console.log(this.$route);
        //         this.currentPage = this.$route.query?.page ?? 1;
        //         this.getProjects();
        //     }
        // );
    },
}
</script>

<template>
    <main>
        <div class="container py-3">
            <div class="py-3">
                <h3>Projects List - page {{ currentPage }}</h3>
            </div>

            <ProjectSearch @search-project="getProjects" />

            <div v-if="errors">{{ errors }}</div>

            <AppLoader v-if="loading" />

            <div class="row" v-else>
                <div class="col col-md-4 g-3" v-for="project in dataResponse.results?.data">
                    <ProjectCard :project="project" />
                </div>

                <nav class="py-3">
                    <ul class="d-flex justify-content-between list-unstyled">
                        <li>
                            <button class="btn btn-sm btn-primary" @click="prevPage"
                                :class="{ 'disabled': !dataResponse.results?.prev_page_url }">
                                Previous
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-sm btn-primary" @click="nextPage"
                                :class="{ 'disabled': !dataResponse.results?.next_page_url }">
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </main>
</template>

<style></style>