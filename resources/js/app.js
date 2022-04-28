require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.component('header-component', require('./components/header.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('footer-component', require('./components/footer.vue').default);

const Home = require('./view/Home.vue').default
const About = require('./view/About.vue').default
// const { default: VueRouter } = require('vue-router')

const routes = [
    {
        path: '/main',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    data: {
        title: 'Bljr Vue Laravel'
    },
    router
});
