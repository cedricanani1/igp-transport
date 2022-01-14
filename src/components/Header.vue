<template>
    <!--====== Header Start ======-->

    <header class="header-area d-none d-lg-block">
        <div class="header-main">
            <div class="container">
                <div class="header-main-wrapper d-flex justify-content-between align-items-center">
                    <div class="header-brand">
                        <a href="index.html">
                            <img class="custom-logo" src="assets/images/logo.jpg" syle="height:50px" alt="">
                        </a>
                    </div>
                    <div class="header-main-content d-flex">
                        <div class="single-content-block d-flex">
                            <div class="block-icon">
                                <i class="ion-android-pin"></i>
                            </div>
                            <div class="block-content media-body">
                                <span class="text">Riviera BONOUMIN LAURIER 6 <br> VILLA N°151 – Cocody</span>
                            </div>
                        </div>
                        <div class="single-content-block d-flex">
                            <div class="block-icon">
                                <i class="ion-android-call"></i>
                            </div>
                            <div class="block-content media-body">
                                <span class="label">Téléphone</span>
                                <span class="text-2"><a href="tel:+225 27 22 49 95 04">+225 2722499504</a></span>
                            </div>
                        </div>
                        <div class="single-content-block d-flex">
                            <div class="block-icon">
                                <i class="ion-clock"></i>
                            </div>
                            <div class="block-content media-body">
                                <span class="label">Horaires de travail</span>
                                <span class="text">Lun-Ven: 8.00 - 17.00</span> 
                            </div>
                        </div>
                    </div>
                    <div class="header-main-btn">
                        <!-- <a href="add-car.html" class="main-btn"><i class="ion-model-s"></i> Add Car </a> -->
                    </div>
                </div>
            </div>
        </div>        
    </header>

    <!--====== Header Ends ======-->
    
    <!--====== Header Desktop Menu Start ======-->

    <div class="header-menu d-none d-lg-block">
        <div class="container">
            <div class="header-menu-inner d-flex align-items-center justify-content-between">
                <nav class="site-navigation">
                    <ul class="main-menu">
                        <li><router-link :to="{name : 'Home' }">Accueil</router-link></li>
                        <li><router-link :to="{name : 'Vehicules' }">Vehicules</router-link></li>
                        <li><router-link :to="{name : 'About' }">A propos de nous</router-link></li>
                        <li><router-link :to="{name : 'Contact'}">Contact</router-link></li>
                        <li v-if="user != null"><router-link :to="{name : 'CommandeL'}">Liste des commandes</router-link></li>
                    </ul>
                </nav>
                <div class="header-social-compare-login d-flex align-items-center">
                    <div class="header-compare-login">
                        <ul class="compare-login">
                            <li v-if="user != null">
                                <router-link :to="{name : 'Commande'}">
                                    <i class="ion-ios-loop-strong"></i> 
                                    <span>Panier</span> 
                                    <span class="compare-badge"> {{ data.length }} </span>
                                </router-link>
                            </li>
                            <li v-if="user != null">
                                <router-link :to="{name : 'edit'}">
                                    <i class="ion-ios-contact-outline"></i><span>{{ user.nom }} {{ user.prenoms }} </span>
                                </router-link>
                            </li>       
                            <li v-if="user != null" @click="logout"><router-link :to="{name : 'Home'}"><i class="ion-android-person"></i><span>Se déconnecter</span></router-link></li>                    
                            <li v-if="user == null"><router-link :to="{name : 'Login'}"><i class="ion-ios-contact-outline"></i> 
                            <span >Se connecter</span></router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--====== Header Desktop Menu Ends ======-->

    <!--====== Header Mobile menu Start ======-->

    <div class="header-mobile-menu d-lg-none">
        <div class="container">
            <div class="header-mobile-wrapper d-flex justify-content-between align-items-center">
                <div class="header-mobile-logo">
                    <a href="index.html">
                        <img class="custom-logo" src="assets/images/logo.jpg" style="" alt="">
                    </a>
                </div>
                <div class="header-mobile-meta">
                    <ul class="meta d-flex">
                        
                        <li v-if="user != null">
                                <router-link :to="{name : 'Commande'}">
                                    <i class="ion-ios-loop-strong"></i> 
                                    <span class="compare-badge"> {{ data.length }} </span>
                                </router-link>
                            </li>
                            <li v-if="user != null"><router-link :to="{name : 'CommandeL'}">&copy;</router-link></li>
                        <li><router-link :to="{name : 'Vehicules' }"><i class="ion-android-car"></i></router-link></li>
                        <li><router-link :to="{ name : 'Login'}"><i class="ion-ios-contact-outline"></i></router-link></li>
                    </ul>
                </div>
            </div>
        </div>

       

    </div>

    <!--====== Header Mobile menu Ends ======-->
</template>

<script>
import axios from 'axios'
import store from '@/store'
import Swal from 'sweetalert2'

export default ({
    data(){
        return{
            data: store.state.data,
            user:null,
        }
    },
    methods:{
        logout: function(){
            axios.get('https://igp-auth.lce-ci.com/api/auth/logout', { headers: {"Authorization" : 'Bearer '+  store.state.token  } })
            .then(function (reponse){
                Swal.fire({title:'Succes',
                    text:'Déconnecté correctement.',
                    icon:'success',
                    showConfirmButton: false,
                })
                localStorage.removeItem('user')
                store.state.token = null
                console.log('reponse', reponse)
                window.location.href = '/'
            })
            .catch(function (error){
                Swal.fire({title:'Echec',
                    text:'Déconnexion échouée.',
                    icon:'error',
                    showConfirmButton: false,
                })
                console.log('error', error)
            })
            
        }
    },
    mounted(){
        this.user = JSON.parse(localStorage.getItem('user'))
        console.log(this.user)
    }
})
</script>
