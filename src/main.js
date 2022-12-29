import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import { DataTable } from 'datatables.net-dt'
import Preloader from '@/components/preloader.vue'
axios.defaults.baseURL = 'https://transport-backend.igp-ci.com/api'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token
Vue.config.productionTip = false
Vue.component('Preloader', Preloader);
Vue.use(axios);
Vue.use(VueSweetalert2);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')