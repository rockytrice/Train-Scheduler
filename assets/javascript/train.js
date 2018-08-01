console.log("connected");



 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBL01dBTjppMuY0Rmb5XFrQ901hZL59dPk",
    authDomain: "train-schedule-97e18.firebaseapp.com",
    databaseURL: "https://train-schedule-97e18.firebaseio.com",
    projectId: "train-schedule-97e18",
    storageBucket: "train-schedule-97e18.appspot.com",
    messagingSenderId: "804451989933"
  };
  firebase.initializeApp(config);
// creating a variable to refence the datadase.
  var database = firebase.database();
