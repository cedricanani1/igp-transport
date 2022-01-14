import { createStore } from 'vuex'


export default createStore({
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
