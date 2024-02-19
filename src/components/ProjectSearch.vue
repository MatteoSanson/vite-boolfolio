<script>
import store from '../store';

export default {
    name: 'ProjectSearch',
    data() {
        return {
            store,
        };
    },
    emits: ['searchProject'],
    methods: {
        search() {
            console.log('funziono e cerco');
            this.$emit('searchProject');
        }
    }
};
</script>

<template>
    <section id="project-search">
        <form action="" @submit.prevent="search">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="search-ey" placeholder="Search"
                    v-model="store.projects.searchKey">
                <label for="search-key">Search</label>
            </div>
            <button class="btn btn-primary btn-sm">Search</button>
        </form>
    </section>
</template>

<style scoped lang="scss"></style>