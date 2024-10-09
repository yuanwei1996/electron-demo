import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'
import ProductList from '../components/ProductList.vue'
import PurchasePage from '../components/PurchasePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: { msg: 'Welcome to Your Vue.js App' }
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductList
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: PurchasePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL || '/',
  routes
})

export default router