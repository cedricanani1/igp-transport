<template>
 
           <section class="dealer-list-page">
            
                <div class="container" >
                 <div class="page-title">
                    <h4 class="title">Liste des commandes</h4>
                </div>
                <div></div>
                <div v-if="cmds.length > 0">
                    <div class="dealer-list-items" v-for="cmd in cmds" :key="cmd.id">
                        <div class="single-dealer">
                        <div class="row">
                            <div class="col-lg-20">
                                <div class="dealer-info">
                                    <div class="dealer-info-wrapper d-flex flex-wrap">
                                        <div class="info-left">
                                            <ul class="info">
                                                <li> Commande : {{ cmd.order_number }} </li>
                                                <li>Montant total : {{ cmd.total_amount }} FCFA</li>  
                                                <li>Nombre d'articles : {{ cmd.cart.length }} </li> 
                                                <li v-if="cmd.payment_status=='unpaid'">Statut : Non-réglé</li>
                                                <li v-else>Statut: Réglé</li>
                                            </ul>
                                        </div>
                                        <div class="info-right">
                                            <router-link :to="{name:'CommandeD',params:{id: cmd.id}}"><button class="main-btn"> Détails </button></router-link>                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>  
                    </div>
                </div>
                <div v-else>Pas de commande.</div>
                </div>
    </section>
</template>

<script>
import axios from 'axios'
import store from '@/store'
export default {
    name:'CommandeL',
    data(){
        return{
            cmds:[],
        }
    },
    mounted(){
        let app = this
        axios.get('/orders-client', { headers: {"Authorization" : 'Bearer '+  store.state.token  } })
            .then(function (reponse) {
                console.log('reponse',reponse.data)
                app.cmds = reponse.data   
            }).catch((error)=>{
                console.log(error)
                
            }) 
    }
}
</script>