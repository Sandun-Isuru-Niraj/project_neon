<template>
  <div class="sign-in-wrapper">
    <div class="sign-container">
      <div class="text-center">
        <h2 class="logo"><img src="imgs/icon.png" width="130px" alt="" /></h2>
        <h4>Login to Transport Map Provider System</h4>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="User name"
          required=""
          v-model="loginInput.txtEmail"
          id="uName"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          required=""
          v-model="loginInput.txtPassword"
          id="passwd"
        />
      </div>
      <div class="form-group text-center">
        <label class="i-checks">
          <input type="checkbox" />
          <i></i>
        </label>
        Remember me
      </div>
      <button
        type="submit"
        class="btn btn-info btn-block"
        v-on:click="Login"
        id="login"
      >
        Login
      </button>
      <div class="text-center help-block">
        <a href="forgot-password.html"><small>Forgot password?</small></a>
      </div>
      <button
        class="btn btn-md btn-default btn-block"
        v-on:click="gotoRegister"
      >
        Create an account
      </button>
    </div>
    <div class="text-center copyright-txt">
      <small>Group Neon</small>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../router";
export default {
  name: "login",
  data() {
    return {
      loginInput: {
        txtEmail: "",
        txtPassword: ""
      }
    };
  },
  methods: {
    Login: function() {
      axios
        .post("http://localhost:3000/login", {
          data: this.loginInput
        })
        .then(function(response) {
          localStorage.setItem("user", response.data.access_token);
          if (response.data.status === 200) {
            alertify.success("You have successfully Registered");
            if (response.data.option === "Driver") {
              router.push("vehicle_reg");
            } else if (response.data.option === "Passenger") {
              router.push("passenger");
            } else {
              alertify.error("Something went wrong!");
            }
          } else {
            alertify.error(response.data.message);
          }
        })
        .catch(function(error) {
          alertify.error("Something went wrong!");
        });
    },
    gotoRegister: function() {
      router.push("register");
    }
  }
};
</script>

<style scoped></style>
