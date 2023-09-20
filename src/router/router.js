import { createRouter, createWebHistory } from 'vue-router';
import Products from '../components/Products.vue'
import Product from '../components/Product.vue'
import About from '../components/About.vue'

const routes = [
    {
        path: '/', component: Products
    },
    {
        path: '/about', component: About
    },
    {
        path: '/product/:id', component: Product, 'name': 'product'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router