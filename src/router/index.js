import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/add-car.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Edit from '../views/edit.vue'
import About from '../views/About.vue'
import Vehicules from '../views/Vehicule/Vehicules.vue'
import Detail from '../views/Vehicule/vehicule-detail.vue'
import Commande from '../views/Commande/Commande.vue'
import Comm from '../views/Commande/Commander.vue'
import ComListe from '../views/Commande/Commande-liste.vue'
import ComDet from '../views/Commande/Commande-détail.vue'
import Contact from '../views/Contact.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-car',
    name: 'add-car',
    component: Add
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'register',
    component: Register
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/Vehicule/vehicules',
    name: 'Vehicules',
    component: Vehicules
  },
  {
    path: '/Vehicule/vehicule-detail/:id',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/Commande/Commande',
    name: 'Commande',
    component: Commande,
    beforeEnter (to, from , next) {
      if (store.state.token == null) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/Commande/Commander',
    name: 'Commander',
    component: Comm,
    beforeEnter (to, from , next) {
      if (store.state.token == null) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/Commande/Commande-liste',
    name: 'CommandeL',
    component: ComListe,
    beforeEnter (to, from , next) {
      if (store.state.token == null ) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/Commande/Commande-detail/:id',
    name: 'CommandeD',
    component: ComDet,
    beforeEnter (to, from , next) {
      if (store.state.token == null) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/a-propos-de-nous',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
