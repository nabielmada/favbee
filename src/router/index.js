import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import DetailProduct from '../views/DetailProduct.vue'
import Pesanan from '../views/Pesanan.vue'
import PesananTunggu from '../views/PesananTunggu.vue'
import PesananSelesai from '../views/PesananSelesai.vue'
import CobaOngkir from '../views/CobaOngkir.vue'

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
  },
  {
    path: '/p/pesanan/:id/:num/:kodetrans',
    name: 'Pesanan',
    component: Pesanan,
    props: true
  },
  {
    path: '/p/pesanan/:id/pending',
    name: 'PesananTunggu',
    component: PesananTunggu
  },
  {
    path: '/p/suksess/id',
    name: 'PesananSelesai',
    component: PesananSelesai
  },
  {
    path: '/cobaongkir',
    name: 'CobaOngkir',
    component: CobaOngkir
  }
]

const router = new VueRouter({
  routes
})

export default router
