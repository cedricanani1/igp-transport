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
                                    <input type="text" placeholder="prenoms" required  >
                                    <p> {{ user.prenoms }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="contact" required  >
                                    <p> {{ user.phone }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="e-mail" required  >
                                    <p> {{ user.email }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="mot de passe" required >
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
  name: 'edit',
  mounted(){
      
  },
  data(){
      return{
          user:JSON.parse(localStorage.getItem('user')),
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