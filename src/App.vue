<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'Boolfolio',
  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<template>
  <AppHeader />
  <!-- <AppMain :projects="projects" /> -->
  <div class="router-view-container">
    <RouterView />
  </div>
  <AppFooter />
</template>

<style scoped>
.router-view-container {
  min-height: calc(100vh - 140px);
}
</style>