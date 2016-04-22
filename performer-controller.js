new PerformerService('http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json', ready)

function ready(dataStore){
  
  var roster = $('.performer-roster');
  
  var performers = dataStore.getAllPerformers();
  
  $('button').on('click', function(event){
      var query = $('#query').val()
      performers = dataStore.getPerformersBySomeValue(query)
      update();
  })
  
  $('.clear-filter-button').on('click', function(){
      performers = dataStore.getAllPerformers()
      update();
  })
  
  
  function update(){
    roster.empty()
    roster.append('<h3>Showing '+performers.length+' Active Players</h3>')

    performers.forEach(function(performer){
        var template = '<div class="performer-card"><img src="'+performer.photo+'" width="80"/>'+performer.fullname+'</div>'
        roster.append(template);
    })
      
  }

update();  
  
}
