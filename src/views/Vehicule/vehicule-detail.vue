<template>
    

    <!--====== Inventory Single Start ======-->

    <section class="inventory-single-area">
        <div class="inventory-image-gallery">
            <div class="inventory-gallery-active">
                <div class="single-image-gallery">
                    <img :src="'https://igp-backend-transport.lce-ci.com/public/'+newt[0]" > 
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="inventory-single-content ">
                
                <div class="title-price">
                    <div class="title-excerpt">
                        <h5 > {{ car.libelle }} <i class="ion-android-checkmark-circle"></i></h5>
                    </div>
                    
                    <div class="price">
                        <span class="price">
                            <span class="sale-price"> {{ car.price }} FCFA </span>
                        </span>
                    </div>
                    <div>
                        <!-- <router-link :to="{name : 'Commande'}"> -->
                            <button class="main-btn" @click="add">
                                <span class="car-tooltip compare">Ajouter au panier </span>
                            </button>
                        <!-- </router-link> -->
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-lg-8">
                        <div class="overview">
                            <h5 class="singe-title">Description</h5>

                            <p>{{ car.description }}</p>
                        </div>

                        <div class="specifications">
                            <h5 class="singe-title">caractéristiques</h5>

                            <div class="specifications-wrapper">
                                <div class="row">
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <i class="ion-android-car"></i> 
                                            <span class="label">corps</span>
                                            <span class="value" v-if="car.type"> {{ car.type.libelle }} </span>
                                        </span>
                                    </div>
                                    
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <i class="ion-map"></i> 
                                            <span class="label">kilométrage</span>
                                            <span class="value"> {{ car.mileage }} </span>
                                        </span>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <i class="ion-waterdrop"></i> 
                                            <span class="label">type de carburant</span>
                                            <span class="value"> {{ car.fuel_type }} </span>
                                        </span>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <i class="ion-speedometer"></i> 
                                            <span class="label">transmission</span>
                                            <span class="value"> {{ car.transmission }} </span>
                                        </span>
                                    </div>
                                    
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <i class="ion-contrast"></i> 
                                            <span class="label">couleur extérieure</span>
                                            <span class="value"> {{ car.color_exterior }} </span>
                                        </span>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <i class="ion-contrast"></i> 
                                            <span class="label">couleur intérieure</span>
                                            <span class="value"> {{ car.color_interior }} </span>
                                        </span>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <span class="icon">&copy;</span>
                                            <span class="label">année</span>
                                            <span class="value"> {{ car.year }} </span>
                                        </span>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-6 glance-col">
                                        <span class="glance">
                                            <i class="ion-pricetag"></i> 
                                            <span class="label">en stock</span>
                                            <span class="value"> {{ car.stock }} </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="consumer-reviews">
                           
                            <div class="point-rating">
                                <div class="rating-score">
                                    <h5 class="score-title">Notes</h5>
                                    <span class="score-point"> {{ car.start }} </span>
                                    <div class="score-star">
                                        <ul class="star">
                                            <li class="rating-on" v-if="els[0]"><i class="ion-android-star"></i></li>
                                             <li class="rating-on" v-if="els[1]"><i class="ion-android-star"></i></li> 
                                             <li class="rating-on" v-if="els[2]"><i class="ion-android-star"></i></li> 
                                             <li class="rating-on" v-if="els[3]"><i class="ion-android-star"></i></li> 
                                             <li class="rating-on" v-if="els[4]"><i class="ion-android-star"></i></li> 
                                        </ul>
                                        
                                    </div>
                                </div>

                                <div class="rating-progress">
                                    <div class="single-progress">
                                        <div class="progress-star">
                                            <span>5 Etoiles</span>
                                        </div>
                                        <div class="progress-line" >
                                            <div class="line-bar" id='cinq'></div>
                                        </div>
                                        <div class="progress-percent">
                                            <span> ({{ Math.round((cinq/100)*rates.length) }}) </span>
                                        </div>
                                    </div>
                                    <div class="single-progress">
                                        <div class="progress-star">
                                            <span>4 Etoiles</span>
                                        </div>
                                        <div class="progress-line" >
                                            <div class="line-bar" id='qtr'></div>
                                        </div>
                                        <div class="progress-percent">
                                            <span>  ({{ Math.round((qtr/100)*rates.length) }}) </span>
                                        </div>
                                    </div>
                                    <div class="single-progress">
                                        <div class="progress-star">
                                            <span>3 Etoiles</span>
                                        </div>
                                        <div class="progress-line" >
                                            <div class="line-bar" id='trois'></div>
                                        </div>
                                        <div class="progress-percent">
                                            <span> ({{ Math.round((trois/100)*rates.length) }}) </span>
                                        </div>
                                    </div>
                                    <div class="single-progress">
                                        <div class="progress-star">
                                            <span>2 Etoiles</span>
                                        </div>
                                        <div class="progress-line">
                                            <div class="line-bar" id='deux'></div>
                                        </div>
                                        <div class="progress-percent">
                                            <span> ({{ Math.round((deux/100)*rates.length) }}) </span>
                                        </div>
                                    </div>
                                    <div class="single-progress">
                                        <div class="progress-star">
                                            <span>1 Etoile</span>
                                        </div>
                                        <div class="progress-line">
                                            <div class="line-bar"  id='un'></div>
                                        </div>
                                        <div class="progress-percent">
                                            <span> ({{ Math.round((un/100)*rates.length) }}) </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="reviews-form">
                                <form @submit="evaluate">
                                    <h4 class="form-title">Soumettez votre évaluation</h4>
                                    <div class="your-rating">
                                        <p>Votre note du produit :</p>
                                        <ul id='stars'>
                                            <li class='star' title='Poor' :id='1' @click="rated(1,1)">
                                                <i class="ion-android-star"></i>
                                            </li>
                                            <li class='star' title='Fair' :id='2' @click="rated(2,2)">
                                                <i class="ion-android-star"></i>
                                            </li>
                                            <li class='star' title='Good' :id='3' @click="rated(3,3)">
                                                <i class="ion-android-star"></i>
                                            </li>
                                            <li class='star' title='Excellent' :id='4' @click="rated(4,4)">
                                                <i class="ion-android-star"></i>
                                            </li>
                                            <li class='star' title='WOW!!!' :id='5' @click="rated(5,5)">
                                                <i class="ion-android-star"></i>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="form-input-items">
                                        <div class="row gx-4">
                                            <div class="col-md-4">
                                                <div class="single-input">
                                                    <input type="text" placeholder="Nom complet" required v-model="nom">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="single-input">
                                                    <input type="text" placeholder="e-mail" required v-model="mail">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="single-input">
                                                    <input type="text" placeholder="Sujet" required v-model="rating.object">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-input">
                                                    <textarea placeholder="Ecrivez vos impressions ici..." required v-model="rating.message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-input">
                                                    <button class="main-btn">Soumettre</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-lg-4">
                        <div class="sidebar">
                            
                            <div class="sidebar-dealer-contact">
                                <h4 class="sidebar-title" style="text-align: center;">Détails de réservation</h4>

                                <div class="dealer-contact-form">
                                    <form>
                                        
                                        <div class="single-input">
                                        Avec chauffeur :  <input type="radio" class="rad" name="chauffeur" :value="1" v-model="driver">
                                            
                                        </div>
                                        
                                        <div class="single-input">
                                        Sans chauffeur :  <input type="radio" class="rad" name="chauffeur" :value="0" v-model="driver">
                                            
                                        </div>
                                        <label for="db_loc">Debut de location : </label>
                                        <div class="single-input">
                                            <input type="date" id="db_loc" v-model="from" :min="today"> 
                                            <i class="ion-clock"></i>
                                        </div>
                                        <label for="fn_loc">Fin de location : </label>
                                        <div class="single-input">
                                            <input type="date" id="fn_loc" v-model="to" :min="from"> 
                                            <i class="ion-clock"></i>
                                        </div>
                                        
                                       
                                    </form>
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
import store from '@/store'
import axios from 'axios'
import Swal from 'sweetalert2'
import moment from 'moment';
moment.locale('fr');

export default {
    
  name: 'Vehicule-detail',
  methods:{
      add: function () {    
          
        let span = Date.parse(this.to) - Date.parse(this.from)
        let jours = (((span / 1000) / 60) / 60) / 24
        console.log('j',jours)
           console.log('db',this.from)
           console
                .log('stamp',Date.parse(this.from))
            console.log('fn',this.to)
            
        if (this.from == "" || this.to == "" || (this.driver != 0 && this.driver != 1))
        {
            Swal.fire('Renseignez TOUS les détails de réservation !')
        }
        else
        {
            if ((Date.now() - 86400000) > Date.parse(this.from))
            {
                
                Swal.fire('La date de début doit être après la date d\'aujourd\'hui!')
            }
            else
            {
               
                console.log('p',this.panier)
            this.panier.forEach(element => {

            this.panier_id.push(element.id)

            })

                if (this.panier_id.includes(this.$route.params.id))
                {
                    Swal.fire('Cet article existe déjà dans le panier.')
                }
                else
                {
                    this.panier.push(
                        {
                            id : this.$route.params.id,
                            days: jours+1,
                            price : Number(this.car.price),
                            to : this.to,
                            from : this.from,
                            driver: this.driver,
                            other:'',
                            lib : this.car.libelle,
                            photo: this.car.photo,
                        }) 
                        Swal.fire('Information',
                            'Ajouté au panier.',
                        'success'
                    )
                }
                const parsed = JSON.stringify(this.panier);
                localStorage.setItem('data', parsed);
                console.log('panier',this.panier)
                }
        }  
       },
      rated: function(yo,ya){
          let i
          if (document.getElementById(ya).style.color != 'yellow')
          {
            for(i=0;i<ya;i++)
            {
              document.getElementById(i+1).style.color = 'yellow'
            }
          }
          else{
            for(i=5;i>ya;i--)
            {
              document.getElementById(i).style.color = 'gray'
            }
          }
          this.rating.rate = yo
          console.log('rate',this.rating.rate)
          console.log('tooo',this.to);
      },
      ratedo: function(start){
          console.log('test',start)
          for (let i = 0; i < start; i++) {
              
              this.els.push(i+1)
          }
          console.log('els',this.els)
          
      },
      evaluate:function(){
          if (store.state.token){
              axios.post('/rating',this.rating)
            .then(function(reponse){
                console.log('rep',reponse)
                if (reponse.data){
                        Swal.fire('Succes',
                    'Evaluation enregistrée.',
                        'success'
                    )
                }
            })
            .catch((error) =>{
                Swal.fire('Erreur',
                'Evaluation non enregistrée.',
                        'error'
                    )
                console.log('err',error)
            })
            this.rating.rate = null
                    this.rating.message = ''
                    this.rating.object = ''
                    this.nom = ''
                    this.mail = ''
          }
          else{
              Swal.fire({title: 'Erreur',
            text:'Veuillez vous connecter pour accéder à cette fonction.',
            icon:'error',
            timer:15000
          }
                    )
            this.rating.rate = null
                    this.rating.message = ''
                    this.rating.object = ''
                    this.nom = ''
                    this.mail = ''
          }
      },
      getcar(){
            
        let app = this
        axios.get('/cars/'+this.$route.params.id)
        .then(function (reponse) {
            app.ratedo(reponse.data.start)
            reponse.data.rate.forEach((element) => {
                app.rates.push(element.rate)
            })
            app.rates.forEach((element) => {
               if (element==1) {
                   app.un++
               }
               else if (element==2) {
                   app.deux++
               }
               else if (element==3) {
                   app.trois++
               }
               else if (element==4) {
                   app.qtr++
               }
               else{
                   app.cinq++
               }
            })
            app.un = (app.un/app.rates.length)*100
            app.deux = (app.deux/app.rates.length)*100
            app.trois = (app.trois/app.rates.length)*100
            app.qtr = (app.qtr/app.rates.length)*100
            app.cinq = (app.cinq/app.rates.length)*100
            document.getElementById('cinq').style.width = app.cinq+"%"
            document.getElementById('qtr').style.width = app.qtr+"%"
            document.getElementById('trois').style.width = app.trois+"%"
            document.getElementById('deux').style.width = app.deux+"%"
            document.getElementById('un').style.width = app.un+"%"
            console.log('resp', app.cinq)
            app.car = reponse.data
            console.log('rep',reponse.data)
            app.newt = app.car.photo.split(';')
            
            app.car.photo = app.newt
            app.newt.pop()
            console.log('p',app.car.photo)
            console.log('t',app.newt)
            
        })
        .catch(function (error){
            console.log(error)
            Swal.fire({title: 'Erreur',
            text:'Echec de récupération des données',
            icon:'error',
            showConfirmButton: false,
            timer:3000
          });
        })
      }
  },
    data() {
        return {
            today: null,
            newt:[],
            car: {},
            rates:[],
            panier: [],
            panier_id: [],
            all: [],
            els: [],
            un: null,
            deux: null,
            trois: null,
            qtr: null,
            cinq: null,
            to:'',
            from:'',
            driver:null,
            mail:'',
            nom:'',
            rating:{
                rate:null,
                object:'',
                message:'',
                product_id:this.$route.params.id,
            }
        }
    },
    mounted(){
        this.getcar()
        this.today = new Date().toJSON().slice(0,10);
        //localStorage.removeItem('data')
        this.panier = store.state.data
        console.log('today',this.today);
        
        console.log('init panier', store.state.data)
        
    },
}
</script>

<style>
.rad{
    height: 10px;
}
</style>