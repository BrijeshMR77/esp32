
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});