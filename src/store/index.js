import { createStore } from 'vuex'


export default createStore({
  state: {
    data: JSON.parse(localStorage.getItem('data')) || [],
    token: localStorage.getItem('token'),
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
