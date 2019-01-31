import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBueopmUrCdV7kB_H4oOXXIiO7fGtVLKLI',
    libraries: 'places', // This is required if you use the Autocomplete plugin
}});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
