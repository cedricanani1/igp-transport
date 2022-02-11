<template>
  <div class="container">
    <div class="page-title">
      <div></div>
      <h4 class="title"><br>Liste des commandes</h4>
      <hr>
    </div>
    <div v-if="cmds.length > 0" class="vehicle-compare-table table-responsive">
      <table id="example" class="table data-table">
        <thead>
          <tr>
            <th class="header">Code</th>
            <th>Montant total</th>
            <th>Nombre de vehicules</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cmd in cmds" :key="cmd.id">
            <td>{{ cmd.order_number }}</td>
            <td>{{ cmd.total_amount }}</td>
            <td>{{ cmd.cart.length }}</td>
            <td>{{ cmd.payment_status }}</td>
            <td>
              <div class="info-right">
                <router-link :to="{ name: 'CommandeD', params: { id: cmd.id } }"
                  ><button class="main-btn">Détails</button></router-link
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Vous n'avez pas de commande.
        <br><br><br><br><br><br>
      </p>
    </div>
    <div class="vld-parent">
      <loading
        v-model:active="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
      ></loading>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import store from '@/store'
import Swal from "sweetalert2";
import $ from "jquery";
import moment from "moment";
moment.locale("fr");
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "CommandeL",
  components: {
    Loading,
  },
  data() {
    return {
      cmds: [],
      isLoading: false,
      fullPage: true,
    };
  },
  mounted() {
    let app = this;
    app.isLoading = true;
    axios
      .get("/orders-client")
      .then(function (reponse) {
        console.log("reponse", reponse.data);
        $(document).ready(function () {
          $("#example").DataTable({
            lengthMenu: [5, 10, 25, 50],
            pageLength: 5,
          });
        });

        app.cmds = reponse.data;
        app.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
        Swal.fire({
          title: "Erreur",
          text: "Echec de récupération des données",
          icon: "error",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  },
};
</script>

<style></style>
