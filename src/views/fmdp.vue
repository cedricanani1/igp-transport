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
                  Entrez votre adresse e-mail
                </div>
                <div class="single-form">
                  <input
                    type="email"
                    placeholder="e-mail"
                    v-model="formlog.email"
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
  name: "fmdp",
  data() {
    return {
      formlog: {
        email: '',
        url: 'http://192.168.1.8:8081/'
      },
      
    };
  },
  components: {},
  mounted(){
  },
  methods: {
    submit() {
      let app=this
      axios.post(
           'https://igp-auth.lce-ci.com/api/auth/sendPasswordResetEmail',
          app.formlog
        )
        .then(function (reponse) {
          console.log("rep", reponse.data);
          if (reponse.data.state == true) {
            Swal.fire({title: 'Note',
            text:'Veuillez consulter votre boîte mail.',
            icon:'info',
            showConfirmButton: false,
            timer:3000
          });
          }
          router.push('/')
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
    },
  },
};
</script>
