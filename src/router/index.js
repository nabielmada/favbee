import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import DetailProduct from '../views/DetailProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/p/:id',
    name: 'DetailProduct',
    component: DetailProduct
  }
]

const router = new VueRouter({
  routes
})

export default router
