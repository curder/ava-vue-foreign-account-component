import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Modal from 'vue-js-modal'
Vue.use(Modal, { componentName: 'modal' })

import avaVueForeignAccountComponents from '../src/index.js';
Vue.use(avaVueForeignAccountComponents, {

});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
