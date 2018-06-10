$(()=>{

  const stats = {
    rockStats: {
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
    },
    paperStats: {
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
    },
    scissorsStats: {
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
    },
    previousResult: null,
    previousPlay: null,
    playerChoice: null,
    computerChoice: null,
  }

const logic = {

}

  const playRound = {
    animate(){
      $('#startPlayer').remove();
      $('#startComputer').remove();
      const $playerSpace = $('#playerSpace');
      const $image = $('<img/>').attr('src','images/player_fist.png');
      $playerSpace.append($image);
      const $computerSpace = $('#computerSpace');
      const $image2 = $('<img/>').attr('src','images/computer_fist.png');
      $computerSpace.append($image2);
      $image.attr('id','startPlayer');
      $image2.attr('id','startComputer');
      setTimeout(function(){
        $image.attr('src',stats.playerChoice);
        $image2.attr('src',stats.computerChoice);
      }, 1800);
    },
    logic(){
      let likely = null;
      if (stats.previousPlay === 'rock') {
        if (stats.previousResult === 'win') {
          likely = Object.keys(stats.rockStats.winThen).reduce((a,b)=>stats.rockStats.winThen[a] > stats.rockStats.winThen[b] ? a : b);
        } else if (stats.previousResult === 'loss') {
          likely = Object.keys(stats.rockStats.lossThen).reduce((a,b)=>stats.rockStats.lossThen[a] > stats.rockStats.lossThen[b] ? a : b);
        } else if (stats.previousResult === 'tie') {
          likely = Object.keys(stats.rockStats.tieThen).reduce((a,b)=>stats.rockStats.tieThen[a] > stats.rockStats.tieThen[b] ? a : b);
        } else {
          console.log("You done messed up, A-a-ron!  You can't predict what he'll throw after rock!");
        }
      } else if (stats.previousPlay === 'paper') {
        if (stats.previousResult === 'win') {
          likely = Object.keys(stats.paperStats.winThen).reduce((a,b)=>stats.paperStats.winThen[a] > stats.paperStats.winThen[b] ? a : b);
        } else if (stats.previousResult === 'loss') {
          likely = Object.keys(stats.paperStats.lossThen).reduce((a,b)=>stats.paperStats.lossThen[a] > stats.paperStats.lossThen[b] ? a : b);
        } else if (stats.previousResult === 'tie') {
          likely = Object.keys(stats.paperStats.tieThen).reduce((a,b)=>stats.paperStats.tieThen[a] > stats.paperStats.tieThen[b] ? a : b);
        } else {
          console.log("You done messed up, A-a-ron!  You can't predict what he'll throw after paper!");
        }
      } else if (stats.previousPlay === 'scissors') {
        if (stats.previousResult === 'win') {
          likely = Object.keys(stats.scissorsStats.winThen).reduce((a,b)=>stats.scissorsStats.winThen[a] > stats.scissorsStats.winThen[b] ? a : b);
        } else if (stats.previousResult === 'loss') {
          likely = Object.keys(stats.scissorsStats.lossThen).reduce((a,b)=>stats.scissorsStats.lossThen[a] > stats.scissorsStats.lossThen[b] ? a : b);
        } else if (stats.previousResult === 'tie') {
          likely = Object.keys(stats.scissorsStats.tieThen).reduce((a,b)=>stats.scissorsStats.tieThen[a] > stats.scissorsStats.tieThen[b] ? a : b);
        } else {
          console.log("You done messed up, A-a-ron!  You can't predict what he'll throw after paper!");
        }
      } else {
        console.log("You done messed up, A-a-ron!  You can't figure out what the user threw last time!");
      }
      //Based on the player's most-likely play in the next turn, return a value to beat the most-likely play. Also, update the stats.computerChoice value to show the correct image on screen.
      if (likely === 'rock') {
        stats.computerChoice = 'images/computer_rock.png';
        return 1;
      } else if (likely === 'paper') {
        stats.computerChoice = 'images/computer_paper.png';
        return 2;
      } else if (likely === 'scissors') {
        stats.computerChoice = 'images/computer_scissors.png';
        return 0
      } else {
        //If this is the first game, the compute will make a random play.
        let choice = Math.floor(Math.random() * 3);
        if (choice === 0) {
          stats.computerChoice = 'images/computer_scissors.png';
        } else if (choice === 1) {
          stats.computerChoice = 'images/computer_rock.png';
        } else if (choice === 2) {
          stats.computerChoice = 'images/computer_scissors.png';
        }
        return choice;
      }
    },
    keepRecord(player, result){
      //The 'play' variable will be stored in stats.previousPlay and used to track player tendencies
      let play = null;
      if (player === 0) {
        play = 'rock';
      } else if (player === 1) {
        play = 'paper';
      } else if (player === 2) {
        play = 'scissors';
      } else {
        console.log('You done messed up, A-a-ron! "player" is invalid: ' + player);
      }
      //If this is the first turn, there will be no previous result, so record the result of the first turn, then return out of the method.
      if (stats.previousResult === null) {
        console.log('no previous results');
        stats.previousResult = result;
        stats.previousPlay = play;
        return;
      }
      //The app is going to base its logic off of what has just happened in the game (player W,L,T) as well as the last thing a player threw against the computer.
      //First, separate what the user played previously
      //Then, separate whether or not the player just won, lost, or tied
      //Then, record what they just played in order to learn the player's tendencies.
      if (stats.previousPlay === 'rock') {
        if (stats.previousResult === 'win') {
          if (play === 'rock') {
            stats.rockStats.winThen.rock += 1;
          } else if (play === 'paper') {
            stats.rockStats.winThen.paper += 1;
          } else {
            stats.rockStats.winThen.scissors += 1;
          }
        } else if (stats.previousResult === 'loss') {
          if (play === 'rock') {
            stats.rockStats.lossThen.rock += 1;
          } else if (play === 'paper') {
            stats.rockStats.lossThen.paper += 1;
          } else {
            stats.rockStats.lossThen.scissors += 1;
          }
        } else if (stats.previousResult === 'tie') {
          if (play === 'rock') {
            stats.rockStats.tieThen.rock += 1;
          } else if (play === 'paper') {
            stats.rockStats.tieThen.paper += 1;
          } else {
            stats.rockStats.tieThen.scissors += 1;
          }
        } else {
          console.log("You done messed up, A-a-ron!  You can't tell if the player won, lost, or tied with rock!");
        }
      } else if (stats.previousPlay === 'paper') {
        if (stats.previousResult === 'win') {
          if (play === 'rock') {
            stats.paperStats.winThen.rock += 1;
          } else if (play === 'paper') {
            stats.paperStats.winThen.paper += 1;
          } else {
            stats.paperStats.winThen.scissors += 1;
          }
        } else if (stats.previousResult === 'loss') {
          if (play === 'rock') {
            stats.paperStats.lossThen.rock += 1;
          } else if (play === 'paper') {
            stats.paperStats.lossThen.paper += 1;
          } else {
            stats.paperStats.lossThen.scissors += 1;
          }
        } else if (stats.previousResult === 'tie') {
          if (play === 'rock') {
            stats.paperStats.tieThen.rock += 1;
          } else if (play === 'paper') {
            stats.paperStats.tieThen.paper += 1;
          } else {
            stats.paperStats.tieThen.scissors += 1;
          }
        } else {
          console.log("You done messed up, A-a-ron!  You can't tell if the player won, lost, or tied with paper!");
        }
      } else if (stats.previousPlay === 'scissors') {
        if (stats.previousResult === 'win') {
          if (play === 'rock') {
            stats.scissorsStats.winThen.rock += 1;
          } else if (play === 'paper') {
            stats.scissorsStats.winThen.paper += 1;
          } else {
            stats.scissorsStats.winThen.scissors += 1;
          }
        } else if (stats.previousResult === 'loss') {
          if (play === 'rock') {
            stats.scissorsStats.lossThen.rock += 1;
          } else if (play === 'paper') {
            stats.scissorsStats.lossThen.paper += 1;
          } else {
            stats.scissorsStats.lossThen.scissors += 1;
          }
        } else if (stats.previousResult === 'tie') {
          if (play === 'rock') {
            stats.scissorsStats.tieThen.rock += 1;
          } else if (play === 'paper') {
            stats.scissorStats.tieThen.paper += 1;
          } else {
            stats.scissorsStats.tieThen.scissors += 1;
          }
        } else {
          console.log("You done messed up, A-a-ron!  You can't tell if the player won, lost, or tied with scissors!");
        }
      } else {
        console.log("You done messed up, A-a-ron!  You can't tell if the previous play was paper, rock, or scissors!")
      }
      stats.previousResult = result;
      stats.previousPlay = play;
    },
  }

  const $rockButton = $('#rock');
  $rockButton.on('click', function(){
    stats.playerChoice = 'images/player_rock.png';
    playRound.animate();
  })

  const $paperButton = $('#paper');
  $paperButton.on('click', function(){
    stats.playerChoice = 'images/player_paper.png';
    playRound.animate();
  });

  const $scissorsButton = $('#scissors');
  $scissorsButton.on('click', function(){
    stats.playerChoice = 'images/player_scissors.png';
    playRound.animate();
  })

})
