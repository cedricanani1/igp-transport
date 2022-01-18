<template>
    


    
    
    <!--====== Dealer List Start ======-->

    <section class="dealer-list-page">
      
                <div class="container" >
                  <h4 class="title">Panier : {{ info.length }} élément(s). </h4> 
                  <div class="dealer-list-items" v-for="value in info" :key="value.id">
                    <div class="single-dealer">
                      <div class="row">
                          <div class="col-lg-4">
                                <div class="dealer-author">
                                    <div class="author-image">
                                      <img class="img" :src="'https://igp-backend-transport.lce-ci.com/public/'+value.photo[0]" :alt="value.lib"> 
                                    </div>
                                    <div class="author-content">
                                      <router-link :to="{name : 'Detail', params:{ id: value.id}}">  <h4 class="author-name"> {{ value.lib }} </h4> </router-link>
                                    </div>
                                </div>
                          </div>
                          <div class="col-lg-8">
                            <div class="dealer-info">
                                    <div class="dealer-info-wrapper d-flex flex-wrap">
                                        <div class="info-left">
                                            <ul class="info">
                                                <li> {{ value.price }} FCFA </li>
                                                <li v-if="value.driver==0"> sans chauffeur </li>
                                                <li v-else> avec chauffeur </li>
                                            </ul>
                                        </div>
                                        <div class="info-right">
                                            <button class="main-btn" @click="suppr(value.id)"> Supprimer </button>
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
                  <div class="single-dealer">
                      
                  </div>  
                  <div v-if="info.length > 0">
                    <router-link :to="{name : 'Commander'}">
                      <button class="main-btn" > Commander </button>
                    </router-link>
                  </div>
                </div>
    </section>

    <!--====== Dealer List Ends ======-->


    <!--====== BACK TOP TOP START ======-->

    <a href="#" class="back-to-top"><i class="ion-ios-arrow-up"></i></a>

    <!--====== BACK TOP TOP ENDS ======-->



</template>

<script>
import store from '@/store'
//import axios from 'axios'
export default {
    
  name: 'Commande',  
  methods:{
    suppr:function(arg){
      console.log('log_db',JSON.parse(localStorage.getItem('data')))      
      const parsed = JSON.stringify(JSON.parse(localStorage.getItem('data')).filter(info => info.id != arg));
      localStorage.setItem('data', parsed);
      console.log('log_fn',JSON.parse(localStorage.getItem('data')))
      
      location.reload()
    },
    condition: function(){
      return console.log(this.info)
    }
  },
  data(){
    return{
      info : [],
    }
  },
  mounted(){
    this.info = store.state.data
    console.log('log_db',this.info)      
    
  }
}
console.log('state',store.state.data)
</script>