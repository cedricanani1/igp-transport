<template>
  <!--====== Log In & Register Start ======-->
    <div>
      <div>
        <br><br><br><br><br>
          <div class="cars-more mt-50 text-center">
            <router-link :to="{name: 'Home'}">
              <button class="main-btn">Retour à l'accueil</button>
            </router-link>
          </div>
        <br><br><br><br><br>
      </div>
    </div>
  <!--====== Log In & Register Ends ======-->

  <!--====== BACK TOP TOP START ======-->

  <a href="#" class="back-to-top"><i class="ion-ios-arrow-up"></i></a>

  <!--====== BACK TOP TOP ENDS ======-->
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'
//import router from '@/router'
//import store from '@/store'
export default {
  name: "Activate",
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
    this.activate()
  },
  methods: {
    activate(){
            axios.get('https://igp-auth.lce-ci.com/api/auth/activateAccount/'+this.$route.params.email+'/'+this.$route.params.token)
            .then(function (reponse){
                console.log("activate",reponse);
                if (reponse.data.state == true)
          {
            Swal.fire({title: 'Succès',
            text:'Compte activé.',
            icon:'success',
            showConfirmButton: false,
            timer:3000
            });
            location.href = '/'
          }
          else
          {
              Swal.fire({title: 'Note',
            text:'Compte déjà activé.',
            icon:'info',
            showConfirmButton: false,
            timer:3000
            });
          }
            })
        },
  },
};
</script>
