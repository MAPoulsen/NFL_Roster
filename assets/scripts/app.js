var roster = [];


// define properties of performer and pushes performer into roster
var performer = function(name, act, ring) {
    this.name = name;
    this.act = act;
    this.ring = ring;
    roster.push(this);
}

// prevents default of submit button and creating new performer/ performer card
$('form').on('submit', function(event) {
    event.preventDefault();
    var form = this;
    var newPerformer = new performer(form.name.value, form.act.value, form.ring.value);

    // check roster's html value so you don't duplicate your input value twice (clears roster's html value )
    $('.performer-roster').html('');
    // not
    // running through roster collecting vales and drawing the card
    for (var i = 0; i < roster.length; i++) {

        // drawing the card
        var currentPerformer = roster[i];
        var newCard = '<div id="performerCardTemplate" class="performer-card"><div class="col-sm-6 col-md-4">' +
            '<div class="thumbnail"><img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">' +
            '<div class="caption"><div><h3>' + currentPerformer.name + '</h3></div>' +
            '<div><strong>' + currentPerformer.act + ' : </strong></div>' +
            '<div><strong>' + currentPerformer.ring + ': </strong></div>' +
            '<button class="btn btn-danger" type="remove" id="' + i + '">HOT HEAD</button>' +
            '</div></div></div></div>';
        $('.performer-roster').append(newCard);
    }

})
$('.performer-roster').on('click', '.btn.btn-danger', function(event) {
    $(this).closest('.performer-card').remove();
    roster.splice($(this).id, 1);
})