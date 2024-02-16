import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './AppHome.vue';
import ProjectList from './ProjectList.vue';
import AppAbout from './AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
    ]
});

export { router };