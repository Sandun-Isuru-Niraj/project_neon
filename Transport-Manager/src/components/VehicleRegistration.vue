<template>
  <div id="ui" class="ui">
    <!--header start-->
    <header id="header" class="ui-header">
      <div class="header">
        <h1>Neon-Uom</h1>
      </div>

      <div class="navbar-header">
        <!--logo start-->
        <a href="index.html" class="navbar-brand"> </a>
        <!--logo end-->
      </div>

      <div class="navbar-collapse nav-responsive-disabled">
        <!--notification start-->
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
            </a>
          </li>

          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
            </a>
          </li>

          <li class="dropdown dropdown-usermenu">
            <a
              href="#"
              class=" dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="true"
            >
              <div class="user-avatar">
                <img src="imgs/user.png" alt="..." />
              </div>
              <!--<i class="fa fa-angle-down"></i>-->
              <span class="caret hidden-sm hidden-xs"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-usermenu pull-right">
              <li>
                <a href="setting.html"><i class="fa fa-cogs"></i> Settings</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-user"></i> Profile</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-sign-out"></i> Log Out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    <br />
    <br />

    <!--sidebar start-->
    <aside id="aside" class="ui-aside">
      <ul class="nav" ui-nav>
        <li class="nav-head">
          <h5 class="nav-title text-uppercase light-txt">Navigation</h5>
        </li>
        <li>
          <a href="perfomance.html"
            ><i class="fa fa-envelope-o"></i><span> Perfomance</span></a
          >
          <ul class="nav nav-sub">
            <li class="nav-sub-header">
              <a href="perfomance.html"><span>Perfomance</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="feedback.html"
            ><i class="fa fa-envelope-o"></i><span> Feedback </span></a
          >
          <ul class="nav nav-sub">
            <li class="nav-sub-header">
              <a href="feedback.html"><span>Feedback</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="newsfeed.html"
            ><i class="fa fa-envelope-o"></i><span> Newsfeed </span></a
          >
          <ul class="nav nav-sub">
            <li class="nav-sub-header">
              <a href="newsfeed.html"><span>Newsfeed</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="vehicle.html"
            ><i class="fa fa-envelope-o"></i><span> Vehicle </span></a
          >
          <ul class="nav nav-sub">
            <li class="nav-sub-header">
              <a href="vehicle.html"><span>Vehicle</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="newsfeedpassenger.html"
            ><i class="fa fa-envelope-o"></i><span> Find Newsfeeds </span></a
          >
          <ul class="nav nav-sub">
            <li class="nav-sub-header">
              <a href="newsfeedpassenger.html"><span>Find Newsfeeds</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="feedbackpassenger.html"
            ><i class="fa fa-envelope-o"></i><span> Feedbackpassenger </span></a
          >
          <ul class="nav nav-sub">
            <li class="nav-sub-header">
              <a href="feedbackpassenger.html"
                ><span>Feedbackpassenger</span></a
              >
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <!--sidebar end-->

    <!--main content start-->
    <div id="content" class="ui-content ui-content-aside-overlay">
      <div class="ui-content-body">
        <div class="ui-container">
          <!--page title and breadcrumb start -->
          <div class="row">
            <div class="col-md-8">
              <h1 class="page-title">About vehicle</h1>
            </div>
            <!--page title and breadcrumb end -->
            <div class="col-md-12">
              <div class="panel">
                <header class="panel-heading">
                  Create your Vehicle details
                </header>
                <div class="panel-body">
                  <form action="#" class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-3 control-label">No plate</label>
                      <div class="col-sm-6">
                        <input
                          class="form-control"
                          v-model="vehicleDetails.number_plate"
                          type="text"
                          id="noPlate"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 control-label">Vehicle name</label>
                      <div class="col-sm-6">
                        <input
                          class="form-control"
                          type="text"
                          id="vehicleName"
                          v-model="vehicleDetails.vehicle_name"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group"
                      ng-class="{ 'has-error' : consumerRegisterForm.Mobi_no.$invalid && (consumerRegisterForm.Office_no.$dirty || submitted)}"
                    >
                      <label class="col-sm-3 control-label">Seat count</label>
                      <div class="col-sm-6">
                        <input
                          type="number"
                          class="form-control"
                          ng-model="RegisterData.Mobi_no"
                          name="Mobi_no"
                          ng-required="true"
                          v-model="vehicleDetails.seat_count"
                        />
                      </div>
                    </div>
                  </form>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-success btn-block"
                      id="submitVehicleDetails"
                      v-on:click="addVehicle"
                    >
                      <i class="fa fa-refresh"></i> Update Vehicle Deatils
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--right side widget start-->
          <div class="ui-aside-right " ui-aside-right></div>
          <!--right side widget end-->
        </div>
      </div>
      <!--main content end-->

      <!--footer start-->
      <div id="footer" class="ui-footer">
        2019 © Neon private Ltd. All right recevied.
      </div>
      <!--footer end-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../router";
export default {
  name: "VehicleRegistration",
  data() {
    return {
      vehicleDetails: {
        number_plate: "",
        vehicle_name: "",
        seat_count: ""
      }
    };
  },
  methods: {
    addVehicle: function() {
      axios
        .post("http://localhost:3000/add_vehicle", {
          data: this.vehicleDetails,
          access_token: localStorage.getItem("user")
        })
        .then(function(response) {
          console.log(response);
          if (response.data.status === 200) {
            alertify.success("Your Vehicle successfully Added!");
            router.push("route_details");
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
