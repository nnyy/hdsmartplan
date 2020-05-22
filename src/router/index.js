import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const constRouters = [
    {
        path: '/',
        component: () => import('@/components/HelloWorld'),
        //  redirect: '',
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
    }]

const routes = constRouters

const router = new VueRouter({
    routes
})

export default router
