player1_score=0;
player2_score=0;

player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");


document.getElementById("player1_name").innerHTML=player1_name+" : "+"";
document.getElementById("player2_name").innerHTML=player2_name+" : "+"";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn :"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn :"+player2_name;

function send(){   
    number_1=document.getElementById("number_1").value;
    number_2=document.getElementById("number_2").value;

    question="<h4>"+number_1+"X"+number_2+"</h4>";
    inbox="<br> Answer : <input id='ans_input' type='text'>";
    check1="<br><br><button class='btn btn-info' onclick='check()'>"+"Check"+"</button>";
    row=question+inbox+check1;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
    answer=parseInt(number_1) * parseInt(number_2);
}

question_turn="player1";
answer_turn="player2";

function check(){
get_answer=document.getElementById("ans_input").value;

    if(answer==get_answer){

    if(answer_turn=="player1"){
      player1_score++;
      document.getElementById("player1_score").innerHTML=player1_score;
    }

    else{
        player2_score++;
        document.getElementById("player2_score").innerHTML=player2_score;
    }

  }

  if(question_turn=="player1"){
   question_turn="player2";
   document.getElementById("player_question").innerHTML="Player Question : "+player2_name;
  }
  else{
    question_turn="player1";    
    document.getElementById("player_question").innerHTML="Player Question : "+player1_name;
  }

  if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Player Answer : "+player2_name;
   }
   else{
     answer_turn="player1";    
     document.getElementById("player_answer").innerHTML="Player Answer : "+player1_name;
   }

  document.getElementById("output").innerHTML="";
}