import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/about.vue'
import Index from '../components/category/Index.vue'
import Create from '../components/category/Create.vue'
import Edit from '../components/category/Edit.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})


