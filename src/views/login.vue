<template>
  <!--====== Log In & Register Start ======-->

  <section class="login-register-page">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-xl-4 col-lg-5">
          <div class="login-register">
            <h2 class="title">Se connecter</h2>

            <div class="login-register-form">
              <form @submit.prevent="submit">
                <div class="single-form">
                  <input
                    type="email"
                    placeholder="e-mail"
                    v-model="formlog.email"
                    required
                  />
                </div>
                <div class="single-form">
                  <input
                    type="password"
                    placeholder="mot de passe"
                    v-model="formlog.password"
                    required
                  />
                </div>
                <div
                  class="
                    checkbox-forgot
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                >
                  <div class="single-form">
                    <router-link :to="{ name: 'register' }">
                      Pas de compte ?
                    </router-link>
                  </div>
                </div>
                <div class="single-form form-btn">
                  <button class="main-btn d-block">Se connecter</button>
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
import Swal from 'sweetalert2'
// import router from '@/router'
//import store from '@/store'
export default {
  name: "login",
  data() {
    return {
      formlog: {
        email: '',
        password: '',
      },
    };
  },
  components: {},
  mounted(){
    
  },
  methods: {
    submit() {
      axios.post(
           'https://igp-auth.lce-ci.com/api/auth/login' ,
          this.formlog
        )
        .then(function (reponse) {
          console.log("rep", reponse.data);
          console.log(reponse.data.access_token);
          if(reponse.data.access_token){
              localStorage.setItem("token", reponse.data.access_token)
            localStorage.setItem('user', JSON.stringify(reponse.data.user))
            Swal.fire({title: 'Succes',
              text:'Connexion réussie.',
              icon:'success',
              showConfirmButton: false,
              timer:3000
            });
            window.location.href = '/'
            } 
        })
        .catch((error) => {
          
          Swal.fire({title: 'Erreur',
            text:'Données incorrectes. Veuillez réessayer',
            icon:'error',
            showConfirmButton: false,
            timer:3000
          });
          console.log(error);
        });
    },
  },
};
</script>
