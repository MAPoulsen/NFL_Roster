var roster = [];


// define properties of performer and pushes performer into roster
var player = function(name, position, num) {
    this.name = name;
    this.position = position;
    this.num = num;
    roster.push(this);
}

// prevents default of submit button and creating new performer/ performer card
$('form').on('submit', function(event) {
    event.preventDefault();
    var form = this;
    var newPlayer = new player(form.name.value, form.position.value, form.num.value);

    // check roster's html value so you don't duplicate your input value twice (clears roster's html value )
    $('.player-roster').html('');
    // not
    // running through roster collecting vales and drawing the card
    for (var i = 0; i < roster.length; i++) {

        // drawing the card
        var currentPlayer = roster[i];
        var newCard = '<div id="performerCardTemplate" class="performer-card"><div class="col-sm-6 col-md-4">' +
            '<div class="thumbnail"><img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">' +
            '<div class="caption"><div><h3>' + currentPlayer.name + '</h3></div>' +
            '<div><strong>' + currentPlayer.position + ' : </strong></div>' +
            '<div><strong>' + currentPlayer.num + ': </strong></div>' +
            '<button class="btn btn-danger" type="remove" id="' + i + '">HOT HEAD</button>' +
            '</div></div></div></div>';
        $('.player-roster').append(newCard);
    }

})
$('.player-roster').on('click', '.btn.btn-danger', function(event) {
    $(this).closest('.player-card').remove();
    roster.splice($(this).id, 1);
})