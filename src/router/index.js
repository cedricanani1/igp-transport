import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Activate from '../views/activate-alert.vue'
import Login from '../views/login.vue'
import Fmdp from '../views/fmdp.vue'
import Recovery from '../views/Recovery.vue'
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
import Err from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/fmdp',
    name: 'fmdp',
    component: Fmdp
  },
  {
    path: '/recovery-password/:email/:token',
    name: 'recoveryPassword',
    component: Recovery
  },
  {
    path: '/activate-account/:email/:token',
    name: 'activateAccount',
    component: Activate
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
  },
  {
    path: '/Commande/Commander',
    name: 'Commander',
    component: Comm,
    meta: { requiresAuth: true }
  },
  {
    path: '/Commande/Commande-liste',
    name: 'CommandeL',
    component: ComListe,
    meta: { requiresAuth: true }
  },
  {
    path: '/Commande/Commande-detail/:id',
    name: 'CommandeD',
    component: ComDet,
    meta: { requiresAuth: true }
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
  { path: '/:pathMatch(.*)*', component: Err },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.token == null) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
