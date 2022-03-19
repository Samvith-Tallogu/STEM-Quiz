
// Final screen message
final_message();

// Functions
function final_message(){
    user = localStorage.getItem("user_name");
    score = localStorage.getItem("score");
    question_number = localStorage.getItem("question_number") 
    
   document.getElementById("final1").innerHTML = "Score: " + score;
   document.getElementById("final2").innerHTML = "Congratulations!";
   document.getElementById("final3").innerHTML = "Thank you for participating, " + user + "!";
   document.getElementById("final4").innerHTML = "You have answered a total of "+ question_number +"/20 questions.";
   document.getElementById("qprog").style.width = parseInt(question_number)*5 + "%";
}

function gotohome(){
    window.location = "./../index.html"
}