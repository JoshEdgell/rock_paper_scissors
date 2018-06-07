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
  this.paperStats = {
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
  this.scissorsStats = {
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
    console.log('Game Result: ' + result);
    //Define a "play" variable to put the players text into a string for use elsewhere in the controller
    let play = null;
    if (player === 0) {
      play = "rock";
    } else if (player === 1) {
      play = "paper";
    } else {
      play = "scissors";
    }
    //If this is the first turn, there will be no previous result, so record the result of the first turn, then return out of the method
    if (this.previousResult === null) {
      this.previousResult = result;
      this.previousPlay = play;
      return;
    }
    //The app is going to base its logic off of what has just happened in the game (player W,L,T) as well as the last thing a player threw against the computer.
    //First, separate what the user played previously
    //Then, separate whether or not the player just won, lost, or tied
    //Then, record what they just played in order to learn the player's tendencies.
    if (this.previousPlay === 'rock') {
      if (this.previousResult === 'win') {
        if (play === "rock") {
          this.rockStats.winThen.rock += 1;
        } else if (play === "paper") {
          this.rockStats.winThen.paper += 1;
        } else {
          this.rockStats.winThen.scissors += 1;
        }
      } else if (this.previousResult === 'loss') {
        if (play === "rock") {
          this.rockStats.lossThen.rock += 1;
        } else if (play === "paper") {
          this.rockStats.lossThen.paper += 1;
        } else {
          this.rockStats.lossThen.scissors += 1;
        }
      } else if (this.previousResult === 'tie') {
        if (play === "rock") {
          this.rockStats.tieThen.rock += 1;
        } else if (play === "paper") {
          this.rockStats.tieThen.paper += 1;
        } else {
          this.rockStats.tieThen.scissors += 1;
        }
      } else {
        console.log('You done messed up, A-a-ron!');
      }
    } else if (this.previousPlay === 'paper') {
      if (this.previousResult === 'win') {

      } else if (this.previousResult === 'loss') {

      } else if (this.previousResult === 'tie') {

      } else {
        console.log('You done messed up, A-a-ron!');
      }
    } else {
      if (this.previousResult === 'win') {

      } else if (this.previousResult === 'loss') {

      } else if (this.previousResult === 'tie') {

      } else {
        console.log('You done messed up, A-a-ron!');
      }
    }
    this.previousResult = result;
    this.previousPlay = play;
  }
})
