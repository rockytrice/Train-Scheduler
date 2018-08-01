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
// creating a variable to reference the database.
var database = firebase.database();

// this is the button for adding new train 
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#name-input").val().trim();
    var trainDestination = $("#Destination-input").val().trim();
    var trainTime = $("#train-time").val().trim();
    var trainFrequency = $("#Frequency-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency

    }
// logs to the console.. working properly
    database.ref().push(newTrain);
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);



    $("#name-input").val("");
    $("#Destination-input").val("");
    $("#train-time").val("");
    $("#Frequency-input").val("");
})
