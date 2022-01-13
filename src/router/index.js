import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/add-car.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import About from '../views/About.vue'
import Vehicules from '../views/Vehicule/Vehicules.vue'
import Detail from '../views/Vehicule/vehicule-detail.vue'
import Commande from '../views/Commande/Commande.vue'
import Comm from '../views/Commande/Commander.vue'
import ComListe from '../views/Commande/Commande-liste.vue'
import ComDet from '../views/Commande/Commande-détail.vue'
import Contact from '../views/Contact.vue'

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
    component: Commande
  },
  {
    path: '/Commande/Commander',
    name: 'Commander',
    component: Comm
  },
  {
    path: '/Commande/Commande-liste',
    name: 'CommandeL',
    component: ComListe
  },
  {
    path: '/Commande/Commande-détail/:id',
    name: 'CommandeD',
    component: ComDet
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
