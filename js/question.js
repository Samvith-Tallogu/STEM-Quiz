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
// Start questions
get_questions(parseInt(localStorage.getItem("question_number")));

function get_questions(i) {
    var questionRef = firebase.database().ref("questions/Q"+i+"/" + "QuestionDetails");
    //var userRef = firebase.database().ref("users/");
    questionRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      document.getElementById("question_number").innerHTML = "Question # " + i;
      document.getElementById("question").innerHTML = data.question;
      document.getElementById("c1").textContent = data.c1;
      document.getElementById("c2").textContent = data.c2;
      document.getElementById("c3").textContent = data.c3;
      document.getElementById("c4").textContent = data.c4;
      document.getElementById("l1").textContent = data.c1;
      document.getElementById("l2").textContent = data.c2;
      document.getElementById("l3").textContent = data.c3;
      document.getElementById("l4").textContent = data.c4;
      document.getElementById("score").innerHTML = "Score: " + localStorage.getItem("score");
  });
}


function confirm_and_next_question(){
  validate_answer();
  get_questions(j);

}

function previous_question(){
  var i = parseInt(localStorage.getItem("question_number"));
  console.log("previous_question: var i: "+i)
  if (i > 1) {
     i = i - 1;
  }
  localStorage.setItem("question_number", i);
  get_questions(i);
}

function next_question(){
  
  update_score("next");
  var qn = parseInt(localStorage.getItem("question_number"));
  console.log("next_question: var i: "+qn)
  if (qn < 20) {
     qn = qn + 1;
  }
  localStorage.setItem("question_number", qn);
  get_questions(qn);
}

function get_answer(q){
  if (q == 1) return "c3"
  else if (q == 2) return "c3"
  else if (q == 3) return "c2"
  else if (q == 4) return "c4"
  else if (q == 5) return "c1"
  else if (q == 6) return "c3"
  else if (q == 7) return "c3"
  else if (q == 8) return "c1"
  else if (q == 9) return "c4"
  else if (q == 10) return "c2"
  else return false;
  
}

function update_score(seq){
  var ch = document.querySelector('input[name="choice"]:checked').value;
  console.log("selected value: " + ch);
  var qn = parseInt(localStorage.getItem("question_number"));
  var score = parseInt(localStorage.getItem("score"));
  var answer_check = get_answer(qn);
  if (seq == "next" && answer_check == ch) {
    score = score + 5;
  } else 
    score = score - 1;
  localStorage.setItem("score", score);
  document.getElementById("score").innerHTML = "Score: " + localStorage.getItem("score");
  console.log("new score: " + localStorage.getItem("score"));
}

function show_submit() {
  document.getElementById("submit_btn").innerHTML = '<button style="font-size: 20px ;font-size: 20px;margin-top: 40px; margin-bottom: 25px; margin-left: 590px;margin-right: 10px;" onclick="get_questions()" class="btn btn-success">Submit</button>'
}