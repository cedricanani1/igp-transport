<template>
    <div>

        <section class="slider-area slider-2" >
            <div class="single-slider-2 bg_cover" style="background-image: url(/assets/images/slider/slider-4.jpg);">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="slider-content-2">
                                <h2 class="main-title">Trouvez la voiture de vos rêves avec Ivoire Goodies Performances.</h2>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>

        <section class="how-work-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-title-2 pb-10">
                            <h2 class="title">Comment ça marche ?</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="single-work d-sm-flex mt-50">
                            <div class="work-icon">
                                <i class="ion-android-search"></i>
                                <span class="number">1</span>
                            </div>
                            <div class="work-content">
                                <h4 class="title">Trouvez la voiture de vos rêves</h4>
                                <p>Grâce à la fonction de recherche de Ivoire Goodies Performances, vous pouvez trouver exactement le type de voiture que vous voulez en quelques minutes. Rapidement et exactement !</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-work d-sm-flex mt-50">
                            <div class="work-icon">
                                <i class="ion-android-checkmark-circle"></i>
                                <span class="number">2</span>
                            </div>
                            <div class="work-content">
                                <h4 class="title">Vérifier le prix et les informations du véhicule</h4>
                                <p>Vérifiez le prix et les informations sur le véhicule.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-work d-sm-flex mt-50">
                            <div class="work-icon">
                                <i class="ion-android-calendar"></i>
                                <span class="number">3</span>
                            </div>
                            <div class="work-content">
                                <h4 class="title">Prenez vos rendez-vous d'un simple toucher</h4>
                                <p>Il est facile de prendre rendez-vous avec des agents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--====== Our Car Start ======-->

        <section class="cars-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-title">
                            <h2 class="title">Nos voitures</h2>
                        </div>
                    </div>
                </div>
                <div class="cars-wrapper">
                    <div class="cars-tab-menu">
                        <ul class="nav" role="tablist">
                            <li><a data-bs-toggle="tab" href="#tab1" role="tab" class="active">populaires</a></li>
                            <!-- <li><a data-bs-toggle="tab" href="#tab2" role="tab" >mieux vendues </a></li> -->
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                            <div class="browse-wrapper" >
                                <div class="row">
                                    <div class="col-lg-4 col-md-6" v-for="popular in paginatedData" :key="popular.id">
                                            <div class="single-car-item-2 mt-50">
                                                <div class="car-image"  v-if="popular.images[0]">
                                                    <router-link :to="{ name : 'Detail', params:{ id: popular.id} }">
                                                        <img :src="'https://transport-backend.igp-ci.com/public/'+popular.images[0]"> 
                                                    </router-link>
                                                </div>                        
                                                <div class="car-content">
                                                    <ul class="car-meta">
                                                        <router-link :to="{name : 'Detail', params:{ id: popular.id} }"><h4 class="car-title">{{ popular.libelle.toUpperCase() }} - <span class="body-type">{{ popular.type.libelle }}</span></h4></router-link>
                                                        <br>
                                                        <li><i class="ion-speedometer"></i> {{ popular.transmission.toUpperCase() }}</li>
                                                        <li>
                                                            <span class="price">
                                                                <span class="sale-price"> {{ popular.price }} FCFA</span>   
                                                            </span>
                                                        </li>
                                                        <li><i class="ion-map"></i> {{ popular.mileage }}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
                                    
                                </div> 
                            </div>
                        </div>

                            <ul class="pagination" v-if="listData.length > 3 || currentPage > 1">
                            
                        
                                <li class="pagination-item" >
                                    <button @click="onClickPreviousPage" :disabled="isInFirstPage" class="main-btn">
                                        Précédent
                                    </button>
                                </li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                                <li class="pagination-item" >
                                    <button @click="onClickNextPage" :disabled="isInLastPage" class="main-btn">
                                        Suivant
                                    </button>
                                </li>
                            
                                
                            </ul>
                    </div>
                    
                    <div class="cars-more mt-50 text-center">
                        <router-link :to="{name: 'Vehicules'}">
                            <button class="main-btn">Voir toutes les voitures</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
   
</template>

<script>
import store from '@/store'
//import axios from 'axios'
//import Swal from 'sweetalert2'

export default {
  name: 'Home',
  data(){
     return{
         user:null,
          /* populars:[],
          all:[], */
          currentPage:1
     }
  },
  props:[
        "listData",
        "totalPages",
        "perPage",
        "total",
        "pageChanged"
  ],
    computed:{
        paginatedData(){
            let start = (this.currentPage * this.perPage) - this.perPage
            let end = start + this.perPage
            return this.listData.slice(start, end)
        },
        startPage(){
            if (this.currentPage === 1) return 1
            if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons - 1)
            return this.currentPage - 1
        },
        endPage(){
            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
        },
        pages(){
            let range = []
            for (let i = this.startPage; i < this.endPage; i++) {
                range.push({
                    number: i,
                    isDisabled : i === this.currentPage
                })
            }
            return range
        },
        isInFirstPage(){
            return this.currentPage === 1
        },
        isInLastPage(){
            return this.currentPage === this.totalPages
        },
    },
  methods:{
        
        onPageChange(page){
            return this.currentPage = page;
        },
        onClickFirstPage(){
            this.onPageChange(1)
        },
        onClickPreviousPage(){
            this.onPageChange(this.currentPage - 1)
        },
        onClickNextPage(){
            this.onPageChange(this.currentPage + 1)
        },
        onClickLastPage(){
            this.onPageChange(this.totalPages)
        },
        onClickPage(page){
            this.onPageChange(page)
        },
        isActivePage(page){
            return this.currentPage === page
        },
    },
  mounted(){
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log('us',this.user) 
      console.log(store.state.token)
      
  }
}
</script>


