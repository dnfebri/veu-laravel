require('./bootstrap');

import Vue from 'vue';
import router from './router'

Vue.component('header-component', require('./components/header.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('footer-component', require('./components/footer.vue').default);

const app = new Vue({
    el: '#app',
    data: {
        title: 'Bljr Vue Laravel'
    },
    router
});
