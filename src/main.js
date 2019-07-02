import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 全局css
import '@/style/index.scss'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
