function PlayerService (url, callWhenDone){
  
  if(typeof callWhenDone !== 'function'){
      return 'Error: you must provide a function to call when done'
  }
    
  var self = this;
  var playerData = []
  
  self.getAllPlayers = function(){
      return playerData;
  }
  
  self.getPlayerBySomeValue = function(value){
    var team = [];
    for (var i = 0; i < playerData.length; i++) {
        var currentPlayer = playerData[i];
        var hasValue = false;
        for(var prop in currentPlayer){
            if(typeof currentPlayer[prop] === 'string' && currentPlayer[prop].toLowerCase() === value){
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
      var BCWServer = "http://bcw-getter.herokuapp.com/?url=";
      var modifiedUrl = BCWServer + encodeURIComponent(url);
      
      $.get(modifiedUrl, function(response){
          var data = JSON.parse(response)
          playerData = data.body.player.filter(function(player){
              if(player.pro_status === 'A'){
                  return player;
              }
          })
          callWhenDone(self)
      })
      
  }
  
  goGetData()
  
}









// function goGetData (){
//     console.log('performerData')
//     console.log(1)
//     console.log(2)
//     console.log(3)
    
//     performerData = [{
//       name: 'Diamond Kitty',
//       act: 'Fat-Lady',
//      ring: 'small-tents',
        
//     },{
//      name: 'Colin the Amazing',
//       act: 'Knife Thrower',
//      ring: 'medium-tents'
//     },{
//         name: 'Stephan',
//       act: 'Lion Tamer',
//      ring: 'big-tents'
//     },{
//         name: 'Anna-Bell',
//       act: 'Magician',
//      ring: 'small-tents'
//     }]
    
//     callWhenDone(self)
// }
// goGetData()