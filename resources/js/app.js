require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

Vue.component('header-component', require('./components/header.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('footer-component', require('./components/footer.vue').default);

const Home = require('./view/Home.vue')
const About = require('./view/About.vue');
const { default: VueRouter } = require('vue-router');

const routes = [
    {
        path: '',
        componen: Home
    },
    {
        path: '/about',
        componen: About
    },
]

const route = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    data: {
        title: 'Bljr Vue Laravel'
    },
    route
});
