function PerformerService (url, callWhenDone){
  
  if(typeof callWhenDone !== 'function'){
      return 'Error: you must provide a function to call when done'
  }
    
  var self = this;
  var performerData = []
  
  self.getAllPerformers = function(){
      return performerData;
  }
  
  self.getPerformerBySomeValue = function(value){
    var troupe = [];
    for (var i = 0; i < performerData.length; i++) {
        var currentPerformer = performerData[i];
        var hasValue = false;
        for(var prop in currentPerformer){
            if(typeof currentPerformer[prop] === 'string' && currentPerformer[prop].toLowerCase() === value){
                hasValue = true;
            }   
        }
        if(hasValue){
            troupe.push(currentPerformer)
        }
    }
    return troupe;      
  } 
  
}
   
  
  
  
  
//   function goGetData(){
//       var BCWServer = "http://bcw-getter.herokuapp.com/?url=";
//       var modifiedUrl = BCWServer + encodeURIComponent(url);
      
//       $.get(modifiedUrl, function(response){
//           var data = JSON.parse(response)
//           performerData = data.body.performer.filter(function(performer){
//               if(performer.pro_status === 'A'){
//                   return player;
//               }
//           })
//           callWhenDone(self)
//       })
      
//   }
  
//   goGetData()
  
// }









function goGetData (){
    console.log('performerData')
    console.log(1)
    console.log(2)
    console.log(3)
    
    performerData = [{
      name: 'Diamond Kitty',
      act: 'Fat-Lady',
     ring: 'small-tents',
        
    },{
     name: 'Colin the Amazing',
      act: 'Knife Thrower',
     ring: 'medium-tents'
    },{
        name: 'Stephan',
      act: 'Lion Tamer',
     ring: 'big-tents'
    },{
        name: 'Anna-Bell',
      act: 'Magician',
     ring: 'small-tents'
    }]
    
    callWhenDone(self)
}
goGetData()