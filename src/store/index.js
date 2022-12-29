import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: JSON.parse(localStorage.getItem('data')) || [],
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    },
    getters: {

    },
})