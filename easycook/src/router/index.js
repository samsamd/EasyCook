import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue'
import HomePage from '../components/HomePage'
import RandomRecipe from '../components/RandomRecipe'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/random',
        name: 'Random',
        component: RandomRecipe
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router