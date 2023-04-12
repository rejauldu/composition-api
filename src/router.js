import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/vue-router/HomePage.vue'
import PostList from './components/vue-router/PostList.vue'
import CreatePost from './components/vue-router/CreatePost.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/posts', component: PostList },
    { path: '/create', component: CreatePost }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;