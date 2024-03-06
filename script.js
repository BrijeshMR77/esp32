// Initialize Firebase with your project details
var firebaseConfig = {
    apiKey: "AIzaSyDkjBXpHUzePC0FAZypb5mAMldHvjsv1cw",
    authDomain: "esp32-test-cb9d8.firebaseapp.com",
    databaseURL: "https://esp32-test-cb9d8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp32-test-cb9d8",
    storageBucket: "esp32-test-cb9d8.appspot.com",
    messagingSenderId: "304298475707",
    appId: "1:304298475707:web:6d721e140ec14394d6299e",
    measurementId: "G-WMCLDDFV1R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
    var database = firebase.database();
    var Led1Status;

    database.ref().on("value", function (snap) {
        Led1Status = snap.val().Led1Status;
        if (Led1Status == "1") {
            document.getElementById("unact").style.display = "none";
            document.getElementById("act").style.display = "block";
        } else {
            document.getElementById("unact").style.display = "block";
            document.getElementById("act").style.display = "none";
        }
    });

    $(".toggle-btn").click(function () {
        var firebaseRef = firebase.database().ref().child("Led1Status");

        if (Led1Status == "1") {
            firebaseRef.set("0");
            Led1Status = "0";
        } else {
            firebaseRef.set("1");
            Led1Status = "1";
        }
    });
});
