import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
