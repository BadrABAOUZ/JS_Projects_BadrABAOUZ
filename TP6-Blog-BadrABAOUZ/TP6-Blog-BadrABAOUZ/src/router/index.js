import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreatePostView from '../views/CreatePostView.vue';
import PostDetailView from '../views/PostDetailView.vue';
import EditPostView from '../views/EditPostView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/add-post', component: CreatePostView },
  { path: '/post/:id', component: PostDetailView },
  { path: '/edit-post/:id', component: EditPostView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;