import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue'
import HomePage from '../components/HomePage'
import RandomRecipe from '../components/RandomRecipe'
import ResearchRecipe from '../components/ResearchRecipe'
import RecipeDetails from '../components/RecipeDetails'

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
    },
    {
        path: '/research',
        name: 'Research',
        component: ResearchRecipe
    },
    {
        path: '/details/:id/:name',
        name: 'Details',
        component: RecipeDetails,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router