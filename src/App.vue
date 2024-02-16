<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

export default {
  name: 'Boolfolio',
  data() {
    return {
      projects: [],
      startUrl: 'http://127.0.0.1:8000',
      apiUrls: {
        projects: '/api/projects',
      }
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    getProjects() {
      axios.get(this.startUrl + this.apiUrls.projects).then(response => {
        console.log(response);
        this.projects = response.data.results.data;
      }).catch(error => { console.log(error) });
    },
  },
  created() {
    this.getProjects();
  }
};
</script>

<template>
  <AppHeader />
  <!-- <AppMain :projects="projects" /> -->
  <RouterView />
  <AppFooter />
</template>

<style scoped></style>