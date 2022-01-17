<template>
    <!--====== Header Start ======-->
    
    <!--====== Header End ======-->

    <!--====== Slider Start ======-->

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

    <!--====== Slider Ends ======-->

    <!--====== How It Work Start ======-->

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
                        <table> 
                        <div class="browse-wrapper">
                            <tr class="row">
                                    <td width="300px" class="col-md-3 col-6" v-for="popular in populars" :key="popular.id">                                   
                                        <div class="single-browse-item text-center">
                                            <router-link :to="{name : 'Detail', params:{ id: popular.id}}">
                                            <div  v-if="popular.images[0]">
                                            <img :src="'https://igp-backend-transport.lce-ci.com/public/Car/'+popular.images[0]"> 
                                            </div></router-link>                          
                                            <div class="car-content">
                                                <ul class="car-meta">
                                                    <router-link :to="{name : 'Detail', params:{ id: popular.id}}"><h4 class="car-title">{{ popular.libelle.toUpperCase() }} - <span class="body-type">{{ popular.type.libelle }}</span></h4></router-link>
                                                    
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
                                    </td>
                            </tr>
                        </div>
                    </table>
                    </div>
                </div>
                
                <div class="cars-more mt-50 text-center">
                    <router-link :to="{name: 'Vehicules'}">
                        <button class="main-btn">Voir toutes les voitures</button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <!--====== Our Car Ends ======-->

    <!--====== How It Work Ends ======-->

   
</template>

<script>
import store from '@/store'
import axios from 'axios'

export default {
  name: 'Home',
  data(){
     return{
         user:null,
          populars:[],
          all:[],
     }
  },
  methods:{
        
    },
  mounted(){
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log('us',this.user) 
      console.log(store.state.token)
      let tab = []
      let app=this
      axios.get('/cars')
        .then(function (reponse) {
            console.log('response',reponse.data)
                reponse.data.forEach(element => {
                    tab = element.photo.split(';')
                    element.images = tab 
                    element.images.pop()
                });
                console.log('response',reponse.data)
            app.all = reponse.data
            app.populars = app.all.filter(popular => popular.start >= 3 )
            console.log('popus',app.populars)
        })
  }
}
</script>


