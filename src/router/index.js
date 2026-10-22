import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', redirect: '/' },
  { path: '/learning', name: 'learning', component: () => import('../views/LearningView.vue') },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue') },
  { path: '/projects/:slug', name: 'project-detail', component: () => import('../views/ProjectDetailView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
