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
    this.playHand(0);
  };
  this.playPaper = function(){
    this.playHand(1);
  };
  this.playScissors = function() {
    this.playHand(2);
  };
  this.playHand = function(player) {
    //The computer's play corresponds to the following:
    // 0 = "rock"
    // 1 = "paper"
    // 2 = "scissors"
    // console.log(player, 'player');
    const computer = this.computerPlay();
    let result = "";
    // console.log(val, 'val');
    if (player === computer) {
      result = "tie"
      // console.log("player: " + player + ", computer: " + computer + ", result: tie");
      if (player === 0) {
        this.rockStats.ties += 1;
      } else if (player === 1) {
        this.paperStats.ties += 1;
      } else {
        this.scissorsStats.ties += 1;
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
      this.paperStats.wins += 1;
      result = "win"
    } else if (player === 1 && computer === 2) {
      // console.log("player: " + player + ", computer: " + computer + ", result: loss");
      this.paperStats.losses += 1;
      result = "loss"
    } else if (player === 2 && computer === 0) {
      // console.log("player: " + player + ", computer: " + computer + ", result: loss");
      this.scissorsStats.losses += 1;
      result = "loss"
    } else if (player === 2 && computer === 1){
      // console.log("player: " + player + ", computer: " + computer + ", result: win");
      this.scissorsStats.wins += 1;
      result = "win"
    } else {
      console.log("You done messed up, A-a-ron!");
    }
    this.keepRecord(player, computer, result);
  };
  this.computerPlay = function() {
    let likely = null;
    if (this.previousPlay === "rock") {
      if (this.previousResult === "win") {
        likely = Object.keys(this.rockStats.winThen).reduce((a,b)=>this.rockStats.winThen[a] > this.rockStats.winThen[b] ? a : b);
      } else if (this.previousResult === "loss") {
        likely = Object.keys(this.rockStats.lossThen).reduce((a,b)=>this.rockStats.lossThen[a] > this.rockStats.lossThen[b] ? a : b);
      } else if (this.previousResult === "tie") {
        likely = Object.keys(this.rockStats.tieThen).reduce((a,b)=>this.rockStats.tieThen[a] > this.rockStats.tieThen[b] ? a : b);
      } else {
        console.log('You done messed up, A-a-ron!')
      }
    } else if (this.previousPlay === "paper") {
      if (this.previousResult === "win") {
        likely = Object.keys(this.paperStats.winThen).reduce((a,b)=>this.paperStats.winThen[a] > this.paperStats.winThen[b] ? a : b);
      } else if (this.previousResult === "loss") {
        likely = Object.keys(this.paperStats.lossThen).reduce((a,b)=>this.paperStats.lossThen[a] > this.paperStats.lossThen[b] ? a : b);
      } else if (this.previousResult === "tie") {
        likely = Object.keys(this.paperStats.tieThen).reduce((a,b)=>this.paperStats.tieThen[a] > this.paperStats.tieThen[b] ? a : b);
      } else {
        console.log('You done messed up, A-a-ron!')
      }
    } else if (this.previousPlay === "scissors") {
      if (this.previousResult === "win") {
        likely = Object.keys(this.scissorsStats.winThen).reduce((a,b)=>this.scissorsStats.winThen[a] > this.scissorsStats.winThen[b] ? a : b);
      } else if (this.previousResult === "loss") {
        likely = Object.keys(this.scissorsStats.lossThen).reduce((a,b)=>this.scissorsStats.lossThen[a] > this.scissorsStats.lossThen[b] ? a : b);
      } else if (this.previousResult === "tie") {
        likely = Object.keys(this.scissorsStats.tieThen).reduce((a,b)=>this.scissorsStats.tieThen[a] > this.scissorsStats.tieThen[b] ? a : b);
      } else {
        console.log('You done messed up, A-a-ron!')
      }
    } else {
      console.log('You done messed up, A-a-ron!');
    }
    if (likely === "rock") {
      return 1;
    } else if (likely === "paper") {
      return 2;
    } else if (likely === "scissors") {
      return 0;
    } else {
      console.log('first game');
      return Math.floor(Math.random() *3);
    }
    // const play = Math.floor(Math.random() * 3);
    // return play;
  };
  this.keepRecord = function(player, result) {
    //Define a "play" variable to put the players text into a string for use elsewhere in the controller
    let play = null;
    if (player === 0) {
      play = "rock";
    } else if (player === 1) {
      play = "paper";
    } else {
      play = "scissors";
    }
    console.log('player played ' + play + ' and ' + result);
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
        if (play === "rock") {
          this.paperStats.winThen.rock += 1;
        } else if (play === "paper") {
          this.paperStats.winThen.paper += 1;
        } else {
          this.paperStats.winThen.scissors += 1;
        }
      } else if (this.previousResult === 'loss') {
        if (play === "rock") {
          this.paperStats.lossThen.rock += 1;
        } else if (play === "paper") {
          this.paperStats.lossThen.paper += 1;
        } else {
          this.paperStats.lossThen.scissors += 1;
        }
      } else if (this.previousResult === 'tie') {
        if (play === "rock") {
          this.paperStats.tieThen.rock += 1;
        } else if (play === "paper") {
          this.paperStats.tieThen.paper += 1;
        } else {
          this.paperStats.tieThen.scissors += 1;
        }
      } else {
        console.log('You done messed up, A-a-ron!');
      }
    } else {
      if (this.previousResult === 'win') {
        if (play === "rock") {
          this.scissorsStats.winThen.rock += 1;
        } else if (play === "paper") {
          this.scissorsStats.winThen.paper += 1;
        } else {
          this.scissorsStats.winThen.scissors += 1;
        }
      } else if (this.previousResult === 'loss') {
        if (play === "rock") {
          this.scissorsStats.lossThen.rock += 1;
        } else if (play === "paper") {
          this.scissorsStats.lossThen.paper += 1;
        } else {
          this.scissorsStats.lossThen.scissors += 1;
        }
      } else if (this.previousResult === 'tie') {
        if (play === "rock") {
          this.scissorsStats.tieThen.rock += 1;
        } else if (play === "paper") {
          this.scissorsStats.tieThen.paper += 1;
        } else {
          this.scissorsStats.tieThen.scissors += 1;
        }
      } else {
        console.log('You done messed up, A-a-ron!');
      }
    }
    this.previousResult = result;
    this.previousPlay = play;
  }
})
