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
    computerChoice: 'images/computer_scissors.png',
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
        this.previousResult = result;
        this.previousPlay = play;
        return;
      }
    }
  }

  const $rockButton = $('#rock');
  $rockButton.on('click', function(){
    stats.playerChoice = 'images/player_rock.png';
    playRound.animate();
  })

})
