
const firebaseConfig = {
  apiKey: "AIzaSyA352FVbV9bJQo9LaJy4XVAUkB2pOMn38E",
  authDomain: "stem-quiz-fde57.firebaseapp.com",
  databaseURL: "https://stem-quiz-fde57-default-rtdb.firebaseio.com",
  projectId: "stem-quiz-fde57",
  storageBucket: "stem-quiz-fde57.appspot.com",
  messagingSenderId: "933518400945",
  appId: "1:933518400945:web:da16e8dd128aeca93fb190",
  measurementId: "G-2VXPZT9F1X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send_details() {
    //console.log("send details() invoked");
    c_name = document.getElementById("input_name").value;
    c_email = document.getElementById("input_mail").value;
    c_age = document.getElementById("input_age").value;
    //console.log(c_name);
    //console.log(c_email);
    //console.log(c_age);
    firebase.database().ref("users/").push({
        name:c_name,
        email:c_email,
        age:c_age
    });
    console.log("pushed details.");
    window.location = "./../html/question.html";
}