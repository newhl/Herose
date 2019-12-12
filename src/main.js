import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./assets/index.css"
import router from "./router"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
