require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.component('header-component', require('./components/header.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('footer-component', require('./components/footer.vue').default);

// const { default: VueRouter } = require('vue-router')
const Home = require('./view/Home.vue').default
const About = require('./view/About.vue').default
// const NotFound = require('./view/NotFound.vue').default
import NotFound from './view/NotFound.vue'

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

const app = new Vue({
    el: '#app',
    data: {
        title: 'Bljr Vue Laravel'
    },
    router
});
