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
                                    <input type="text" placeholder="nom" required  >
                                    <p> {{ user.nom }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="prenoms" required v-model="form.prenoms" >
                                    <p> {{ user.prenoms }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="contact" required v-model="form.phone" >
                                    <p> {{ user.phone }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="e-mail" required v-model="form.email" >
                                    <p> {{ user.email }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="mot de passe" required v-model="form.password">
                                    <p> *********** </p>
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
//import axios from 'axios'
//import store from '@/store'
//import Swal from 'sweetalert2'
export default {
  name: 'register',
  mounted(){
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log('user', this.user)
  },
  data(){
      return{
          user:null,
          form:{
            nom:'',
            prenoms:'',
            phone:'',
            email:'',
            password:'',
          }
      }
  },
  methods: {
   signup: function(){
      
   }
  },
  
}
</script>