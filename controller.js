
var playerService;

new PlayerService('http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json', ready)

function ready(dataStore) {

    playerService = dataStore;
    
    var roster = $('.player-list');

    var players = dataStore.getAllPlayers();

    $('.search').on('click', function (event) {
        var query = $('#query').val()
        players = dataStore.getPlayersBySomeValue(query)
        update();
    })

    $('.clear-filter-button').on('click', function () {
        players = dataStore.getAllPlayers()
        update();
    })


    function update() {
        roster.empty()
  

        players.forEach(function (player) {
            var template = '<div class="media" draggable="true" ondragstart="dragPlayer(event, \'' + player.id + '\')"><div class="media-left"><img class="media-object" src="' + player.photo + '" width="80"/></div>' +
                '<div class="media-body"><h5 class="media-heading">' + player.fullname + '</h5><h6>' + player.position + '</h6><h6>' + player.pro_team + '</h6></div></div>';
                
            roster.append(template);
        })

    }

    update();
}

function dragPlayer(event, playerId) {

    var player = playerService.getPlayerById(playerId);
    
    event.dataTransfer.setData("player", JSON.stringify({
        id: player.id,
        fullName: player.fullname,
        position: player.position,
        photo: player.photo,
        team: player.pro_team
    }));
}
