import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomePageView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ApartmentPicsView from '../views/ApartmentPicsView.vue'
// import ApartmentsView from '../views/ApartmentsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/apartments',
    name: 'apartments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ApartmentsView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/apartmentsPics',
    name: 'apartmentPics',
    component: ApartmentPicsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
