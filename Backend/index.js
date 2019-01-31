const express = require('express');
var firebase = require("firebase");
const app = express();
var cors = require('cors');
var jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

var config = {
    apiKey: "AIzaSyApN3QHrrJiVnyhsrx2fwqthAwm32jzCeA",
    authDomain: "neon-985d0.firebaseapp.com",
    databaseURL: "https://neon-985d0.firebaseio.com",
    projectId: "neon-985d0",
    storageBucket: "neon-985d0.appspot.com",
    messagingSenderId: "9422961749"
  };

firebase.initializeApp(config);
var db = firebase.firestore();
  
app.listen(port, function () {

    console.log("Listening to Port "+port);
});



app.post("/register", function (req,res) {
   
    firebase.auth().createUserWithEmailAndPassword(req.body.data.txtEmail, req.body.data.txtPassword).then(function(user) {
        var user = firebase.auth().currentUser.email;
        console.log(req.body);
        db.collection(user).doc("userDetails").set({
            option: req.body.data.txtCategory
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

        var data = {
            status: 200,
            message: "Success"
        }
        
        res.send(JSON.stringify(data));
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
});

app.post("/login", function(req,res){

    firebase.auth().signInWithEmailAndPassword(req.body.data.txtEmail, req.body.data.txtPassword).then(function(user) {
        var user = firebase.auth().currentUser;
        var token = jwt.sign({ email: user.email, name: user.displayName, uid: user.uid, exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) }, 'moratuwa123');
        
        db.collection(user.email).doc("userDetails").get().then(function(doc) {
            if (doc.exists) {
                var data = {
                    status: 200,
                    message: "Success",
                    access_token: token,
                    option: doc.data().option
                }
                
                res.send(JSON.stringify(data));
            } else {
                // doc.data() will be undefined in this case
                var data = {
                    status: 403,
                    message: "User Data not found"
                }
                res.send(JSON.stringify(data));
            }
        }).catch(function(error){
            var data = {
                status: 500,
                message: "Internal Server Error!"
            }
            res.send(JSON.stringify(data));
        });

        
    }, function(error) {
        var data = {
            status: 500,
            message: error.message
        }
        res.send(JSON.stringify(data));
    });

});

app.post('/add_vehicle', function(req,res){
    
    jwt.verify(req.body.access_token, 'moratuwa123', function(err, decoded) {

        db.collection(decoded.email).doc("vehicleDetails").set({
            VehicleNP: req.body.data.number_plate,
            option: "Private",
            routeNumber: "N/A",
            scount: req.body.data.seat_count,
            vehicleName: req.body.data.vehicle_name
        })
        .then(function() {
            console.log("Document successfully written!");
            var data = {
                status: 200,
                message: "Success"
            }

            res.send(JSON.stringify(data));
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
            var data = {
                status: 500,
                message: "error"
            }

            res.send(JSON.stringify(data));
        });

        console.log(decoded);
      });

    
});

app.post("/add_cities", function(req,res){

    jwt.verify(req.body.access_token, 'moratuwa123', function(err, decoded) {

        var data = req.body.data;

        db.collection(decoded.email).doc("RouteDetails").set({data})
        .then(function() {
            console.log("Document successfully written!");
            var data = {
                status: 200,
                message: "Success"
            }

            res.send(JSON.stringify(data));
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
            var data = {
                status: 500,
                message: "error"
            }

            res.send(JSON.stringify(data));
        });

        console.log(decoded);
      });
      
});
