import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/submission',
      name: 'submission',
      component: () => import('../views/SubmissionView.vue')
    },

    {
      path: '/newsletter',
      name: 'newsletter',
      component: () => import('../views/NewsletterView.vue')
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('../views/ProgramsView.vue')
    },
    {
      path: '/saved',
      name: 'saved',
      component: () => import('../views/SavedView.vue')
    },
    {
      path: '/newsletters/:newsletter_key',
      name: 'newsletterpdf',
      component: () => import('../views/PdfViewNewsletter.vue')
    },
    {
      path: '/programs/:program_key',
      name: 'programspdf',
      component: () => import('../views/PdfViewProgram.vue')
    }
  ]
})

export default router
