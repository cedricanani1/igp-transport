import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//axios.defaults.baseURL = 'http://192.168.1.3:8003/api'
axios.defaults.baseURL = 'https://igp-backend-transport.lce-ci.com/api'

createApp(App).use(store).use(router).use(vuex).use(VueSweetalert2).mount('#app')

