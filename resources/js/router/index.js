import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = require('../view/Home.vue').default
const About = require('../view/About.vue').default
import User from '../view/User.vue'
import NotFound from '../view/NotFound.vue'

const routes = [
    {
        name: 'Home',
        path: '/main',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'User',
        path: '/user/:name?',
        component: User,
        props: true
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