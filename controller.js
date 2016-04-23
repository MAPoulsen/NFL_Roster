new PlayerService('http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json', ready)

function ready(dataStore){
  
  var roster = $('.player-roster');
  
  var players = dataStore.getAllPlayers();
  
  $('button').on('click', function(event){
      var query = $('#query').val()
      players = dataStore.getPlayersBySomeValue(query)
      update();
  })
  
  $('.clear-filter-button').on('click', function(){
      playerss = dataStore.getAllPlayers()
      update();
  })
  
  
  function update(){
    roster.empty()
    roster.append('<h3>Showing '+players.length+' Active Players</h3>')

    players.forEach(function(player){
        var template = '<div class="player-card"><img src="'+player.photo+'" width="80"/>'+player.fullname+'</div>'
        roster.append(template);
    })
      
  }

update();  
  
}
