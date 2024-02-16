import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './AppHome.vue';
import ProjectList from './ProjectList.vue';
import AppAbout from './AppAbout.vue';
import NotFound from './NotFound.vue';
import ProjectDetail from './ProjectDetail.vue';

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
            path: '/projects/:slug',
            name: 'single-project',
            component: ProjectDetail,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
});

export { router };