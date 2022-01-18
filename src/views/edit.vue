<template>
   
   

    <!--====== Log In & Register Start ======-->

    <section class="login-register-page">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <div class="login-register">
                        <h2 class="title">Modifier le compte</h2>

                        <div class="login-register-form">
                            <form @submit.prevent="edit">
                                <div class="single-form">
                                    <input type="text" placeholder="nom" required v-model="form.nom">
                                    <p>Donnée actuelle : {{ user.nom }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="prenoms" required v-model="form.prenoms">
                                    <p>Donnée actuelle : {{ user.prenoms }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="contact" required v-model="form.phone">
                                    <p>Donnée actuelle : {{ user.phone }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="text" placeholder="e-mail" required v-model="form.email">
                                    <p>Donnée actuelle : {{ user.email }} </p>
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="mot de passe" required v-model="form.password">
                                </div>
                                <div class="single-form">
                                    <input type="password" placeholder="confirmation de mot de passe" required v-model="form.password_confirmation">
                                </div> 
                                <div class="single-form">
                                    <input type="password" placeholder="nouveau mot de passe" required v-model="form.newPassword">
                                </div> 
                                <div class="single-form form-btn">
                                    <button class="main-btn d-block">Valider</button>
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
import store from '@/store'
import Swal from 'sweetalert2'
export default {
  name: 'edit',
  mounted(){
      this.form.nom = this.user.nom
      this.form.prenoms = this.user.prenoms
      this.form.phone = this.user.phone
      this.form.email = this.user.email
  },
  data(){
      return{
          user:store.state.user,
          form:{
            nom:'',
            prenoms:'',
            phone:'',
            email:'',
            password:'',
            password_confirmation:'',
            newPassword:''
          }
      }
  },
  methods: {
   edit: function(){
      if(this.form.password == this.form.password_confirmation){
          this.user.prenoms = this.form.prenoms
          this.user.nom = this.form.nom
          this.user.email = this.form.email
          this.user.phone = this.form.phone
          localStorage.setItem('user', JSON.stringify(this.user))
          console.log('usr',store.state.user.prenoms)
          axios.post('https://igp-auth.lce-ci.com/api/auth/modify-account', this.form)
      .then(function (reponse){
          Swal.fire({title: 'Succes',
            text:'Modification réussie.',
            icon:'success',
            showConfirmButton: false,
            timer:3000
          })
          console.log('edit_rep', reponse.data)
        window.location.href = '/'
      })
      .catch(function (error){
          Swal.fire('Echec',
                    'Echec de modification. Veuillez réessayer SVP.',
                    'error'
                )
          console.log('edit_error',error)
      })
      }
      else{
          Swal.fire('Erreur',
                'Votre mot de passe diffère de sa confirmation.\nVeuillez réessayer.',
                'error'
            )
      }
   }
  },
  
}
</script>