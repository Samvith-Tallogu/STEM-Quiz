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
firebase.initializeApp(firebaseConfig)

function get_questions(i) {
    var questionRef = firebase.database().ref("questions/Q"+i+"/" + "QuestionDetails");
    //var userRef = firebase.database().ref("users/");
    questionRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      document.getElementById("question").innerHTML = data.question;
      document.getElementById("c1").textContent = data.c1;
      document.getElementById("c2").textContent = data.c2;
      document.getElementById("c3").textContent = data.c3;
      document.getElementById("c4").textContent = data.c4;
      document.getElementById("l1").textContent = data.c1;
      document.getElementById("l2").textContent = data.c2;
      document.getElementById("l3").textContent = data.c3;
      document.getElementById("l4").textContent = data.c4;
  });
}
get_questions(1);
function confirm_and_next_question(){
  validate_answer();
  get_questions(j);

}

function validate_answer(){

  update_score();
}

function update_score(){

}

function show_submit() {
  document.getElementById("submit_btn").innerHTML = '<button style="font-size: 20px ;font-size: 20px;margin-top: 40px; margin-bottom: 25px; margin-left: 590px;margin-right: 10px;" onclick="get_questions()" class="btn btn-success">Submit</button>'
}