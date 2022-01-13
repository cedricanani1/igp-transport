<template>
  

     <!--====== Page Breadcrumb Start ======-->

    <!-- <div class="page-breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="page-breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Page</a></li>
                        <li class="breadcrumb-item active">FAQs</li>
                    </ul>
                </div>
            </div>
        </div>
    </div> -->

    <!--====== Page Breadcrumb Start ======-->

    <!--====== FAQ'S Start ======-->

<section class="faq-page">
        <div class="container">
            <div class="page-title">
                <h4 class="title">Finalisez votre commande</h4>
            </div>

                <div class="row">
                    <div class="col-xxl-3 col-lg-4">
                        <div class="faq-sidebar">
                            
                            <div class="sidebar-dealer-contact">
                                <h4 class="sidebar-title" style="text-align: center;">Détails de réservation</h4>

                                <div class="dealer-contact-form">
                                    <form >
                                        <label for="nom">Nom : </label>
                                        <div class="single-input">
                                            <input type="text" id="nom" v-model="dt.nom" required> 
                                            
                                        </div>
                                        <label for="pnom">Prénom : </label>
                                        <div class="single-input">
                                            <input type="text" id="pnom" v-model="dt.prenoms" required> 
                                            
                                        </div>
                                        <label for="ville">Ville : </label>
                                        <div class="single-input">
                                            <input type="text" id="ville" v-model="dt.location" required> 
                                            
                                        </div>
                                        <label for="contact">e-mail : </label>
                                        <div class="single-input">
                                            <input type="email" id="email" v-model="dt.email" required> 
                                            
                                        </div>
                                        <label for="contact">Contact : </label>
                                        <div class="single-input">
                                            <input type="text" id="contact" v-model="dt.phone" required> 
                                            
                                        </div>
                                        <label for="dest">Destination : </label>
                                        <div class="single-input">
                                            <input type="text" id="dest" v-model="dt.rent_location" required> 
                                            
                                        </div>
                                        <div>
                                            <br>
                                            <button class="main-btn" @click="comm"> Valider la commande </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-7 col-lg-6">
                        <div class="faq-accordion">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. Panier</a>
                                    </div>
                            
                                    <div id="collapseOne" class="collapse show" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="dealer-list-items" v-for="value in info" :key="value.id">
                                                <div class="single-dealer">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                            <div class="dealer-author">
                                                                <div class="author-image">
                                                                <img class="img" :src="'https://igp-backend-transport.lce-ci.com/public/Car/'+value.photo[0]" :alt="value.lib">
                                                                </div>
                                                                <div class="author-content">
                                                                <router-link :to="{name : 'Detail', params:{ id: value.id}}">  <h4 class="author-name"> {{ value.lib }} </h4> </router-link>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="dealer-info">
                                                                <div class="dealer-info-wrapper d-flex flex-wrap">
                                                                    <div class="info-left">
                                                                        <ul class="info">
                                                                            <li> FCFA  {{ value.price }} </li>
                                                                            <li v-if="value.driver==0">sans chauffeur </li>
                                                                            <li v-if="!value.driver==0">avec chauffeur </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="dealer-info-phone">
                                                                <br>
                                                                    Louée du : {{ value.from }} <br> Au : {{ value.to }}
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    
</template>
<script>
import axios from 'axios'
import store from '@/store'
import Swal from 'sweetalert2'

export default {
    name: 'Commander',
    data(){
        return{
            info : [],
            dt: {
                id: null, 
                order_number: 'COM012405X',
                total_amount: 0,
                payment_status: 'non-réglé',
                status: 'non-livrée',
                nom: '',
                prenoms: '',
                email: '',
                phone: '',
                shipping: 'neant',
                location: '',
                rent_location: '',
                user_id: 1,
                cart: this.info,
            }
        }
    },
    methods:{
        
        comm: function(){
            this.dt.cart = this.info
            axios.post('/orders',this.dt, { headers: {"Authorization" : 'Bearer '+  store.state.token  } })
            .then(function(reponse){
                console.log('rep',reponse)
                 Swal.fire({title: 'Succes',
                    text:'Commande réussie.',
                    icon:'success',
                    showConfirmButton: false,
                    timer:3000
                })
                localStorage.removeItem('data')
                location.reload()
            })
            .catch((error) =>{
                console.log('err',error)
                Swal.fire('Erreur',
                'Erreur. Non commandé.',
                    'error'
                )
            })
            
    }
    },
    mounted(){
        this.info = store.state.data
        this.dt.cart = this.info
        console.log('cart', this.dt.cart)
            
            store.state.data.forEach(element => {
                this.dt.total_amount += element.price
            });
    }
}
</script>