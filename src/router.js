import Index from '@/views/'
import Home from '@/views/Home.vue'
import ProductDetails from '@/views/ProductDetails.vue'

import VueRouter from 'vue-router'

//Définition des routes de l'app, avec ajout de redirection vers la page 'Products'
export const myRoutes = [
    {
        path: '/', component: Index, children: [
            { path: '/products', component: Home, exact: true },
			{ path: '/products/:productId', component: ProductDetails, exact: true },
			{ path: '/*', redirect: '/products' }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: myRoutes
})

export default router