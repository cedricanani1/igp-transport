<template>
   
   

    <!--====== Log In & Register Start ======-->

    <section class="login-register-page">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <div class="login-register">
                        <h2 class="title">S'inscrire</h2>

                        <div class="login-register-form">
                            <form @submit.prevent="signup">
                                <div class="single-form">
                                    <input type="text" placeholder="nom" required v-model="form.nom">
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="prenoms" required v-model="form.prenoms">
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="contact" required v-model="form.phone">
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="e-mail" required v-model="form.email">
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="mot de passe" required v-model="form.password">
                                </div>
                               <div class="single-form">
                                    <input type="password" placeholder="confirmez votre mot de passe" required v-model="form.password_confirmation">
                                </div>
                                <div class="single-form form-btn">
                                    <button class="main-btn d-block">S'inscrire</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!--====== Log In & Register Ends ======-->
    
   

    <!--====== BACK TOP TOP START ======-->

    <a href="#" class="back-to-top"><i class="ion-ios-arrow-up"></i></a>

    <!--====== BACK TOP TOP ENDS ======-->

   
</template>

<script>
import axios from 'axios'
//import store from '@/store'
import Swal from 'sweetalert2'
export default {
  name: 'register',
  data(){
      return{
          form:{
            nom:'',
            prenoms:'',
            phone:'',
            email:'',
            password:'',
            password_confirmation:'',
          }
      }
  },
  methods: {
   signup: function(){
       if (this.form.password == this.form.password_confirmation)
       {
            axios.post(  'https://igp-auth.lce-ci.com/api/auth/signup' ,
            this.form)
            .then(function (reponse){
                Swal.fire('Succes',
                    'Compte enregistré correctement.',
                    'success'
                )
                console.log('rep',reponse.data)
            })
            .catch(function (error){
                Swal.fire('Echec',
                    'Echec d\'inscription. Veuillez réessayer SVP.',
                    'error'
                )
                console.log(error)
            })
       }
       else
       {
           Swal.fire('Erreur',
                'Votre mot de passe diffère de sa confirmation.\nVeuillez réessayer.',
                'error'
            )
       }
   }
  },
  
}
</script>