<template>
  <div class="form-group" id="rating-ability-wrapper">
    <div class="header">
      <h1>Neon-Uom</h1>
    </div>
    <div class="container">
      <div class="row">
        <ul class="list-unstyled">
          <li>
            <label
              ><input type="checkbox" value="Mampe" v-model="cities" />
              Mampe</label
            >
          </li>
          <li>
            <label
              ><input type="checkbox" value="Mount Lavinia" v-model="cities" />
              Mount Lavinia</label
            >
          </li>
          <li>
            <label
              ><input type="checkbox" value="Siddamulla" v-model="cities" />
              Siddamulla</label
            >
          </li>
          <li>
            <label
              ><input type="checkbox" value="Piliyandala" v-model="cities" />
              Piliyandala</label
            >
          </li>
          <li>
            <label
              ><input
                type="checkbox"
                value="Pinhena Junction"
                v-model="cities"
              />
              Pinhena Junction</label
            >
          </li>
          <li>
            <label
              ><input
                type="checkbox"
                value="Miriswaththa Junction"
                v-model="cities"
              />
              Miriswaththa Junction</label
            >
          </li>
          <li>
            <label
              ><input type="checkbox" value="Suwarapola" v-model="cities" />
              Suwarapola</label
            >
          </li>
          <li>
            <label
              ><input
                type="checkbox"
                value="Moratuwa Campus"
                v-model="cities"
              />
              Moratuwa Campus</label
            >
          </li>
          <li>
            <label
              ><input type="checkbox" value="Kudamaaduwa" v-model="cities" />
              Kudamaaduwa</label
            >
          </li>
          <li>
            <label
              ><input
                type="checkbox"
                value="Sikuradapola Junction"
                v-model="cities"
              />
              Sikuradapola Junction</label
            >
          </li>
          <li>
            <label
              ><input type="checkbox" value="Katubedda" v-model="cities" />
              Katubedda</label
            >
          </li>
        </ul>

        <button
          type="button"
          class="btn btn-success btn-block"
          id="submitVehicleDetails"
          v-on:click="AddCities"
        >
          Add Cities
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../router";
export default {
  name: "RouteDetails",
  data() {
    return {
      cities: []
    };
  },
  methods: {
    AddCities: function() {
      axios
        .post("http://localhost:3000/add_cities", {
          data: this.cities,
          access_token: localStorage.getItem("user")
        })
        .then(function(response) {
          console.log(response);
          if (response.data.status === 200) {
            alertify.success("Your Vehicle successfully Added!");
            console.log(response);
            //router.push("route_details");
          } else {
            alertify.error(response.data.message);
          }
        })
        .catch(function(error) {
          alertify.error("Something went wrong!");
        });
    }
  }
};
</script>

<style scoped></style>
