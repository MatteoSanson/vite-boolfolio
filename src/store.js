import { reactive } from "vue";

const store = reactive({
    api: {
        startUrl: 'http://127.0.0.1:8000',
        apiUrls: {
            projects: '/api/projects',
        },
    },
    projects: {},
});

export default store;