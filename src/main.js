import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import moment from 'moment'
import { VuejsDatatableFactory } from 'vuejs-datatable';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import vueConfig from 'vue.config';

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
Vue.prototype.moment = moment;
VuejsDatatableFactory.useDefaultType( false )
    .registerTableType( 'datatable', tableType => tableType.mergeSettings( {
        table: {
            class:   'table table-hover table-striped'
        },

    }))
Vue.use(VuejsDatatableFactory);

new Vue({
  render: h => h(App),
}).$mount('#app')
