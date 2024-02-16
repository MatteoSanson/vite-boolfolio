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
  <RouterView />
  <AppFooter />
</template>

<style scoped></style>