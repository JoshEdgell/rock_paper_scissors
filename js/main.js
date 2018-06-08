$(()=>{

  const $startButton = $('#startButton');
  const $playerFist = $('#playerFist');
  const $computerFist = $('#computerFist');

  const animateFists = function(){
    $playerFist.attr('id','startPlayer');
    $computerFist.attr('id','startComputer')
  }

  const removePlayerFist = function() {
    console.log('remove function invoked');
    $playerFist.remove();
  }

  $startButton.on('click', function(){
    animateFists();
    setTimeout(function(){
      $playerFist.remove();
      $computerFist.remove();
    }, 2000);
  })

})
