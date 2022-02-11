<template>
  <!--====== Log In & Register Start ======-->

  <section class="login-register-page">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-xl-5 col-lg-5">
          <div class="login-register">
            <h2 class="title">Mot de passe oublié</h2>
            
            <div class="login-register-form">
              <form @submit.prevent="submit">
                <div class="single-form">
                  Entrez votre mot de passe
                </div>
                <div class="single-form">
                  <input
                    type="password"
                    placeholder="mot de passe"
                    v-model="formlog.password"
                    required
                  />
                </div>
                <div class="single-form">
                  Confirmez votre mot de passe
                </div>
                <div class="single-form">
                  <input
                    type="password"
                    placeholder="confirmation de mot de passe"
                    v-model="formlog.password_confirmation"
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
                      Mot de passe oublié ?
                    </router-link><br>
                  </div>
                </div>
                <div class="single-form form-btn">
                  <button class="main-btn d-block">OK</button>
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
import router from '@/router'
//import store from '@/store'
export default {
  name:"Recovery",
  data() {
    return {
      formlog: {
        password: '',
        password_confirmation: '',
      },
      
    };
  },
  components: {},
  mounted(){
    axios.get(
           'https://igp-auth.lce-ci.com/api/auth/verifToken/'+this.$route.params.email+'/'+this.$route.params.token)
        .then(function (reponse) {
          console.log("rep", reponse.data);
          if (reponse.data.state == false)
          {
            Swal.fire({title: 'Attention',
            text:'Lien expiré. Recommencez le processus de récupération.',
            icon:'warning',
            showConfirmButton: false,
            timer:3000
            });
          }
          router.push('/')
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods: {
    submit() {
      let app = this
      if (app.formlog.password == app.formlog.password_confirmation)
      {
        axios.post(
           'https://igp-auth.lce-ci.com/api/auth/recoveryPassword/'+app.$route.params.email+'/'+app.$route.params.token,
          app.formlog
        )
        .then(function (reponse) {
          console.log("rep", reponse.data);
          if (reponse.data.state == true)
          {
            Swal.fire({title: 'Succès',
            text:'Mot de passe modifié.',
            icon:'success',
            showConfirmButton: false,
            timer:3000
            });
          }
          })
        .catch((error) => {
          
          Swal.fire({title: 'Erreur',
            text:'Erreur inconnue. Veuillez réessayer',
            icon:'error',
            showConfirmButton: false,
            timer:3000
          });
          console.log(error);
        });
      }
      else{
        Swal.fire({title: 'Erreur',
            text:'Le mot de passe et la confirmation ne correspondent pas. Veuillez réessayer',
            icon:'error',
            showConfirmButton: false,
            timer:3000
          });
      }
    },
  },
};
</script>
