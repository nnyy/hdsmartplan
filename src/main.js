import Vue from 'vue'
import App from './App.vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import "@/auth/auth"
import "./icons"

import store from "@/store";
import router from "@/router";

Vue.config.productionTip = false

Vue.use(Element, {
    size: Cookies.get('size') || 'medium'
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
