import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "/",
      component: () => import("./components/Login.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/Register.vue")
    },
    {
      path: "/vehicle_reg",
      name: "vehicle_reg",
      component: () => import("./components/VehicleRegistration.vue")
    },
    {
      path: "/passenger",
      name: "passenger",
      component: () => import("./components/Passenger.vue")
    },
    {
      path: "/route_details",
      name: "route_details",
      component: () => import("./components/RouteDetails.vue")
    }
  ]
});
