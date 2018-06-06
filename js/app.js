const app = angular.module("RPSApp", []);

app.controller("RPSController", function(){
  this.userStats = {
    rock: 0,
    paper: 0,
    scissors: 0,
    rockWins: 0,
    rockLosses: 0,
    rockTies: 0,
    paperWins: 0,
    paperLosses: 0,
    paperTies: 0,
    scissorsWins: 0,
    scissorsLosses: 0,
    scissorsTies: 0,
  };
  this.playRock = function(){
    // console.log('user played rock');
    this.userStats.rock += 1;
    this.playHand(0);
    // console.log(this.userStats, 'user stats');
  };
  this.playPaper = function(){
    // console.log('user played paper');
    this.userStats.paper += 1;
    this.playHand(1);
    // console.log(this.userStats, 'user stats');
  };
  this.playScissors = function() {
    // console.log('user played scissors');
    this.userStats.scissors += 1;
    this.playHand(2);
    // console.log(this.userStats, 'user stats');
  };
  this.playHand = function(player) {
    //The computer's play corresponds to the following:
    // 0 = "rock"
    // 1 = "paper"
    // 2 = "scissors"
    console.log(player, 'player');
    const val = Math.floor(Math.random() * 3);
    console.log(val, 'val');
    if (player === val) {
      console.log("player: " + player + ", computer: " + val + ", result: tie");
      if (player === 0) {
        this.userStats.rockTies += 1;
      } else if (player === 1) {
        this.userStats.paperTies += 1;
      } else {
        this.userStats.scissorsTies += 1;
      }
    } else if (player === 0 && val === 1) {
      console.log("player: " + player + ", computer: " + val + ", result: loss");
      this.userStats.rockLosses += 1;
    } else if (player === 0 && val === 2) {
      console.log("player: " + player + ", computer: " + val + ", result: win");
      this.userStats.rockWins +=1;
    } else if (player === 1 && val === 0) {
      console.log("player: " + player + ", computer: " + val + ", result: win");
      this.userStats.paperWins += 1;
    } else if (player === 1 && val === 2) {
      console.log("player: " + player + ", computer: " + val + ", result: loss");
      this.userStats.paperLosses += 1;
    } else if (player === 2 && val === 0) {
      console.log("player: " + player + ", computer: " + val + ", result: loss");
      this.userStats.scissorsLosses += 1;
    } else if (player === 2 && val === 1){
      console.log("player: " + player + ", computer: " + val + ", result: win");
      this.userStats.scissorsWins += 1;
    } else {
      console.log("You done messed up, A-a-ron!");
    }
  }
})
