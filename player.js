var roster = {};
    
// $('#addPlayerBtn').on('click', function (event) {

//     event.preventDefault();
    
//     var form = $('#addPlayerForm')[0];
    
//     createPlayerCard({
//         id: new Date().getTime,
//         fullName: form.name.value,
//         position: form.position.value,
//         photo: 'http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/',
//         team: form.team.value
//     });
//     form.reset();
//     $('#myModal').modal('hide');

// })

$('.player-roster').on('click', '.btn.btn-danger', function (event) {
    
    var id = $(this)[0].id;
    
    roster[id] = null;
    $(this).closest('.card').remove();
    console.log('Roster: ', roster);
    
})

function createPlayerCard(player) {
    
    var rosterView = $('.player-roster');

  var newCard = '<div class="card"><div class="thumbnail"><div class="row"><div class="col-sm-12"><img src="' + player.photo + '" alt="NFL Player"></div></div>' +
        '<div class="row"><div class="col-sm-12 text-center">' + player.fullName + '</div></div><div class="row"><div class-"col-sm-12 text-center">' + player.position +
        '</div></div><div class="row"><div class="col-sm-12 tet-center">' + player.team + '</div></div><button class="btn btn-danger" type="delete" id="' + player.id + '">' +
        '<i class="glyphicon glyphicon-remove"></i> Remove</button></div></div></div></div>';

    roster[player.id] = player;
    rosterView.append(newCard);
    
    console.log('Roster: ', roster);
}

function drop(event) {
    var player = JSON.parse(event.dataTransfer.getData("player"));
    
    if(roster[player.id]) {
        alert('You already have this player in your roster!')
    }
    else {
        createPlayerCard(player);
    }
}

function allowDrop(event) {
    event.preventDefault();
}
