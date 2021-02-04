var gameState=0;
var databse;
var quiz;
var contestantCount;
var question;
var contestant;
var allContestants=[];
var canvas;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz=new Quiz()
 
  quiz.start()
}


function draw(){
  background("pink");
  if(contestantCount===4){
    gameState=1
    database.ref('/').update({
      gameState:1
    })

  }
  if(gameState===1){
   clear();
   quiz.play();
  }
  
}
