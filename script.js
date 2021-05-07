//
//
// var number=Math.floor(Math.random()*20)+1;
// var score=20;
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent=" Very nice!!!  Correct  Number";
// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=20;
// document.querySelector(".guess").value=21;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".check").addEventListener("click", function(){
// const guess=Number(document.querySelector(".guess").value);
//   console .log(document.querySelector(".guess").value);
//  if(!guess){
//    document.querySelector(".message").textContent="No number. Write a number !!! ";
//  }else if(guess===number){
//
//    document.querySelector(".message").textContent="Very nice !!! Correct Number ";
//  } else if(guess>number&&guess<21){
//    score--;
//    document.querySelector(".score").textContent=score;
//    document.querySelector(".message").textContent="Too high !!!";}
//    if(score===0){
//      document.querySelector(".message").textContent="You have lost the game !!!";
//    }
//    else if(score<0){
//
//      document.querySelector(".message").textContent="You hava lost the game !!!";
//      documnet.querySelector(".score").textContent=0;
//    }
//
//
//
//  }
//  else if(guess<number&& guess>0){
//    score--;
//    document.querySelector(".score").textContent=score;
//
//    document.querySelector(".message").textContent="Too low"; if(score===0){
//       document.querySelector(".message").textContent="You have lost the game !!!";
//     }
//  } else if(guess>20||guess<1){
//    document.querySelector(".message").textContent=" Incorrect number !!! please write number between 1 and 20";
//    // score--;
//    // document.querySelector(".score").textContent=score;
//    //   document.querySelector(".message").textContent="You have lost the game !!!";
//  }
//
//
// });
// document.querySelector(".number").textContent=number;

var yourscore=document.querySelector(".score").textContent=20;
var randomNumber=Math.floor(Math.random()*20)+1;
document.querySelector(".guess").value;
var highscore=0;
document.querySelector(".highscore").textContent=highscore;


// document.querySelector(".number").textContent=13;
//  document.querySelector(".score").textContent=20;
//  document.querySelector(".guess").value=21;

document.querySelector(".check").addEventListener("click",function(){

const guess=Number(document.querySelector(".guess").value);

if(!guess){
  document.querySelector(".message").textContent=" No number !!! please write any number";
}
else if(guess>randomNumber){
  if(yourscore>1){
    document.querySelector(".message").textContent="Too high !!!";
    yourscore--;
    document.querySelector(".score").textContent=yourscore;
  }
  else
{
  document.querySelector(".message").textContent="You lost the game !!!";

document.querySelector(".score").textContent=0;
document.querySelector("body").style.backgroundColor="red";
document.querySelector(".number").textContent="Oh no!!!   you lost.";
document.querySelector(".number").style.width="90rem";
document.querySelector(".number").style.color="black";
  document.querySelector(".check").style.opacity="0.0";
}

}

else if(guess<randomNumber){
  if(yourscore>1){
  document.querySelector(".message").textContent="Too low !!!";
    yourscore--;
    document.querySelector(".score").textContent=yourscore;
  }
  else

  {

    document.querySelector(".message").textContent="You lost the game !!!";
    document.querySelector(".score").textContent=0;
    document.querySelector("body").style.backgroundColor="red";
    document.querySelector(".number").textContent="Oh no!!!   you lost.";
    document.querySelector(".number").style.width="60rem";
    document.querySelector(".number").style.color="black";
      document.querySelector(".check").style.opacity="0.0";
  }




}
else if(guess===randomNumber){
  document.querySelector(".number").textContent=randomNumber;
document.querySelector(".message").textContent="Wonderfull !!! you choose correct number ";
document.querySelector("body").style.backgroundColor='#60b347';
  document.querySelector(".number").textContent="Great !!! you win.";
document.querySelector(".number").style.width="60rem";
  document.querySelector(".check").style.opacity="0.0";
if(yourscore>highscore){
  highscore=yourscore;
  document.querySelector(".highscore").textContent=highscore;

}
}


});
document.querySelector(".again").addEventListener("click",function(){
  document.querySelector(".guess").value='';
  document.querySelector(".message").textContent="  Start guessing.... ";
  document.querySelector(".score").textContent=20;
  document.querySelector(".number").textContent="?";
  document.querySelector(".number").style.width="15rem";
  document.querySelector("body").style.backgroundColor='#222';
  document.querySelector(".check").style.opacity="1.0";
  randomNumber=Math.floor(Math.random()*20)+1;



});
