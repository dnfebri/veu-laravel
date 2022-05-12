import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = require('../view/Home.vue').default
const About = require('../view/About.vue').default
import NotFound from '../view/NotFound.vue'

const routes = [
    {
        path: '/main',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history', //Untuk menghilangkan # di URL
    routes
})

export default router