<template>
  <div class="sign-in-wrapper">
    <div class="sign-container">
      <div class="text-center">
        <h4>Register</h4>
      </div>

      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="uName"
          v-model="regInput.txtEmail"
          placeholder="Email"
          required=""
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="passwd"
          v-model="regInput.txtPassword"
          placeholder="Password"
          required=""
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          v-model="regInput.txtConfirmPassword"
          placeholder="Confirm Password"
          required=""
        />
      </div>
      <div class="form-group">
        <label for="userRole">Select Role</label
        ><select
          class="form-control js-example-templating"
          v-model="regInput.txtCategory"
          id="userRole"
        >
          <optgroup label="Select your Role">
            <option>Select your Role...</option>
            <option value="Driver">Driver</option>
            <option value="Passenger">Passenger</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group text-center">
        <label class="i-checks">
          <input type="checkbox" />
          <i></i>
        </label>
        Agree the terms and policy
      </div>
      <input
        type="submit"
        class="btn btn-info btn-block"
        v-on:click="Register()"
        value="Register"
      />
      <p class="text-muted text-center help-block">
        <small>Already have an account?</small>
      </p>
      <button class="btn btn-md btn-default btn-block" v-on:click="gotoLogin">
        Login
      </button>
      <div class="text-center copyright-txt">
        <small>Group Neon</small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../router";
export default {
  name: "Register",
  data() {
    return {
      regInput: {
        txtEmail: "",
        txtPassword: "",
        txtConfirmPassword: "",
        txtCategory: ""
      }
    };
  },
  methods: {
    Register: function() {
      if (this.regInput.txtPassword === this.regInput.txtConfirmPassword) {
        axios
          .post("http://localhost:3000/register", {
            data: this.regInput
          })
          .then(function(response) {
            console.log(response);
            if (response.data.status === 200) {
              alertify.success("You have successfully Registered");
              router.push("login");
            } else {
              alertify.error("Something went wront, Try again!");
            }
          })
          .catch(function(error) {
            alertify.error("Something went wront, Try again!");
          });
      } else {
        alertify.error("Passwords Not Matched!");
      }
    },
    gotoLogin: function() {
      router.push("login");
    }
  }
};
</script>
