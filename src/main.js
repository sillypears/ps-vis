import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
Vue.prototype.moment = moment;

new Vue({
  render: h => h(App),
}).$mount('#app')
