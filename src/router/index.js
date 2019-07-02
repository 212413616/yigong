import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Layout',
            redirect: '/home',
            component: Layout,
            children: [
                {
                    path: 'home',
                    name: 'Home',
                    component: () => import('@/views/home'),
                },
                {
                    path: 'activity',
                    name: 'Activity',
                    component: () => import('@/views/activity'),
                }
            ]
        },

    ]
})
