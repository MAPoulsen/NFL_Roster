function PlayerService (url, callWhenDone){
  
  if(typeof callWhenDone !== 'function'){
      return 'Error: you must provide a function to call when done'
  }
    
  var self = this;
  var playerData = []
  
  self.getAllPlayers = function(){
      return playerData;
  }
  
  self.getPlayerById = function(id) {
      
     for (var i = 0; i < playerData.length; i++) {
        var currentPlayer = playerData[i];

        if(currentPlayer.id === id) {
            return currentPlayer;
        }
    }
    
    return null;      
 }
  
  self.getPlayersBySomeValue = function(value){
    var team = [];
    for (var i = 0; i < playerData.length; i++) {
        var currentPlayer = playerData[i];
        var hasValue = false;
        for(var prop in currentPlayer){
            if(typeof currentPlayer[prop] === 'string' && currentPlayer[prop].toLowerCase() === value.toLowerCase()){
                hasValue = true;
            }   
        }
        if(hasValue){
            team.push(currentPlayer)
        }
    }
    return team;      
  } 
  
  function goGetData(){
      playerData = localStorage.getItem('playerData');
      if(playerData){
          playerData = JSON.parse(playerData);
          return callWhenDone(self);
      }
      
      var BCWServer = "http://bcw-getter.herokuapp.com/?url=";
      var modifiedUrl = BCWServer + encodeURIComponent(url);
      
      
      $.get(modifiedUrl, function(response){
          var data = JSON.parse(response)
          playerData = data.body.players.filter(function(player){
              if(player.pro_status === 'A'){
                  return player;
              }
          })
          localStorage.setItem('playerData', JSON.stringify(playerData))
          callWhenDone(self)
      })
      
  }
  
  goGetData()
  
}