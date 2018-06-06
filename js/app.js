const app = angular.module("RPSApp", []);

app.controller("RPSController", function(){
  this.userStats = {
    paperWins: 0,
    paperLosses: 0,
    paperTies: 0,
    scissorsWins: 0,
    scissorsLosses: 0,
    scissorsTies: 0,
  };
  this.rockStats = {
    wins: 0,
    losses: 0,
    ties: 0,
    winThen: {
      rock: 0,
      paper: 0,
      scissors: 0
    },
    lossThen: {
      rock: 0,
      paper: 0,
      scissors: 0
    },
    tieThen: {
      rock: 0,
      paper: 0,
      scissors: 0
    }
  };
  this.previousResult = null;
  this.previousPlay = null;
  this.playRock = function(){
    // console.log('user played rock');
    this.playHand(0);
    // console.log(this.userStats, 'user stats');
  };
  this.playPaper = function(){
    // console.log('user played paper');
    this.playHand(1);
    // console.log(this.userStats, 'user stats');
  };
  this.playScissors = function() {
    // console.log('user played scissors');
    this.playHand(2);
    // console.log(this.userStats, 'user stats');
  };
  this.playHand = function(player) {
    //The computer's play corresponds to the following:
    // 0 = "rock"
    // 1 = "paper"
    // 2 = "scissors"
    // console.log(player, 'player');
    const computer = Math.floor(Math.random() * 3);
    let result = "";
    // console.log(val, 'val');
    if (player === computer) {
      result = "tie"
      // console.log("player: " + player + ", computer: " + computer + ", result: tie");
      if (player === 0) {
        this.rockStats.ties += 1;
      } else if (player === 1) {
        this.userStats.paperTies += 1;
      } else {
        this.userStats.scissorsTies += 1;
      }
    } else if (player === 0 && computer === 1) {
      // console.log("player: " + player + ", computer: " + computer + ", result: loss");
      this.rockStats.losses += 1;
      result = "loss"
    } else if (player === 0 && computer === 2) {
      // console.log("player: " + player + ", computer: " + computer + ", result: win");
      this.rockStats.wins +=1;
      result = "win"
    } else if (player === 1 && computer === 0) {
      // console.log("player: " + player + ", computer: " + computer + ", result: win");
      this.userStats.paperWins += 1;
      result = "win"
    } else if (player === 1 && computer === 2) {
      // console.log("player: " + player + ", computer: " + computer + ", result: loss");
      this.userStats.paperLosses += 1;
      result = "loss"
    } else if (player === 2 && computer === 0) {
      // console.log("player: " + player + ", computer: " + computer + ", result: loss");
      this.userStats.scissorsLosses += 1;
      result = "loss"
    } else if (player === 2 && computer === 1){
      // console.log("player: " + player + ", computer: " + computer + ", result: win");
      this.userStats.scissorsWins += 1;
      result = "win"
    } else {
      console.log("You done messed up, A-a-ron!");
    }
    this.keepRecord(player, computer, result);
  };
  this.keepRecord = function(player, compuer, result) {
    //If this is the first turn, there will be no previous result, so record the result of the first turn, then return out of the function.
    let play = null;
    if (player === 0) {
      play = 'rock';
    } else if (player === 1) {
      play = 'paper';
    } else {
      play = 'scissors';
    }
    if (this.previousResult === null) {
      this.previousResult = result;
      if (player === 0) {
        this.previousPlay = 'rock';
      } else if (player === 1) {
        this.previousPlay = 'paper';
      } else {
        this.previousPlay = 'scissors';
      }
      return;
    }
    if (this.previousResult === 'loss') {
      // console.log('last time, player played ' + this.previousPlay + ' and lost');
      // console.log('player played ' + play + ' this time.');
      if (this.previousPlay === "rock") {
        //Update this.rockStats.losses
        //Update this.rockStats.lossThen
      }
    } else if (this.previousResult === 'win') {
      // console.log('last time, player played ' + this.previousPlay + ' and won');
      // console.log('player played ' + play + ' this time.');
    } else {
      // console.log('last time, player played ' + this.previousPlay + ' and tied');
      // console.log('player played ' + play + ' this time.');
    }
    this.previousResult = result;
    this.previousPlay = play;
    console.log('updated - user played ' + this.previousPlay + ' result: ' + this.previousResult)
  }
})
