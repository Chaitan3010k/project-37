var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database,quiz;

var question, contestant,person, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 1){
    quiz.updateState(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
