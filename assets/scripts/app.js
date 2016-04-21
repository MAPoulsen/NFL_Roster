
var performer= function(name, act, ring){
  this.name= name;
  this.act= act;
  this.ring= ring;
}
$('#addPerformerBtn').on('click', function(){
  var name= $('#name').text();
  var act= $('#act').text();
  var ring= $('#ring').text();
  
  var performer = new Performer(name, act, ring);
  var card = $('<div class="performer-card"></div');
  var html = $('#playerCardTemplate').html();
  console.log('Card: ', html);
  
  $('#roster').append(card);
});







// var players = [];
//  var nfl = {
//      players: []
//  } 
//   var playerListElem = document.getElementById('player-list');
  
//   function player(Name, Position, Number){
//       this.name= name;
//       this.position= position;
//       this.number= number;
//   }
  
  
//  function Player(name, salary, url, inStock){
//  function Player(id, name, salary, url, budget){
//   this.id = id;   
//    this.name = name;
//    this.salary = salary;
//    this.url = url;   
//   this.inStock = inStock;
//   this.budget = budget;
   
//   players.push(this);
//   this.inStock = function(){
//       //bad code remove it later
      
//       if(this.budget <= 0){
//          var elem = $('div.player[id="'+this.id+'"]'); 
//           elem.addClass('out-of-stock'); 
//       }
      
//       return this.budget > 0;
//   }
  
//   nfl.players.push(this);
   
//   }
  
//  var fishingPotty = new Product('The Fishing Potty', 100, 'http://www.stupid.com/thumbnail.asp?file=assets/images/HKLINE_11.jpg&maxx=400&maxy=0', 50);
//  var fishingPotty = new Product(1,'The Fishing Potty', 100, 'http://www.stupid.com/thumbnail.asp?file=assets/images/HKLINE_11.jpg&maxx=400&maxy=0', 5);
  
//  var baconFrosting = new Product('Bacon Frosting Yum!', 10, 'http://www.stupid.com/thumbnail.asp?file=assets/images/BACFROS_1.jpg&maxx=400&maxy=0', 200);
//  var baconFrosting = new Product(2, 'Bacon Frosting Yum!', 10, 'http://www.stupid.com/thumbnail.asp?file=assets/images/BACFROS_1.jpg&maxx=400&maxy=0', 200);
  
//  var poopPen = new Product('My Poopie Friend', 12, 'http://www.stupid.com/thumbnail.asp?file=assets/images/41yvaacarbl_sy355_.jpg&maxx=400&maxy=0', 1200);
//  var vader = new Product(3, 'My Shower Friend', 12, 'http://i1.wp.com/ohthethingsyoucanbuy.com/wp-content/uploads/2015/12/Darth-Vader-Shower-Head.jpg?fit=400,300', 1200);
  
  
//  for(var i = 0; i < players.length; i++){
//      var currentPlayer = players[i];
//  for(var i = 0; i < nfl.players.length; i++){
//      var currentPlayer = nfl.players[i];
//       drawRosterOnScreen(currentPlayer);    
//   }
  
 
//  /*
//  +<div id="product.id" class="product">
//  +    <h3>product.name</h3>
//  +    <p>product.price + shipping & handeling</p>
//  +    <img src="product.url" alt="">
//  +    <div class="btn-group">
//  +    <button class="btn btn-primary">Buy Now</button>
//  +    </div>
//  +</div>
//  +*/
//   function drawRosterOnScreen(currentPlayer){
//       var playerElem = document.createElement('div');
//      playerElem.style.display = 'inline-block'
//      playerElem.innerHTML = '<h3>'+ currentPlayer.name +'</h3> <p>$'+ currentPlayer.salary +' plus shipping and handeling</p> <img src="'+currentPlayer.url+'" alt=""><button>Select Now</button>'
//      playerElem.className = 'player';
//      playerElem.id = currentPlayer.id;
//      playerElem.innerHTML = '<h3>'+ currentPlayer.name +'</h3> <p>$'+ currentPlayer.salary +' plus shipping and handeling</p> <img src="'+currentPlayer.url+'" alt=""><div class="btn-group"><button>Add to Roster</button></div>'
//       playerListElem.appendChild(playerElem);    
//   } 



// // Roster----------------------------------

// var roster = {
//      players: {},
//      clear: function(){
//          this.players = {}
//      }, 
//      addPlayer: function(player){
//          //GOAL:: Lets map the ^^ product that comes in from our store. To the product in the cart. If the product already exist then update the quantity only
         
//          var alreadyOnRoster = hasProp(roster.players, player.id);
         
//          var playerToAdd;
         
//          if(alreadyOnRoster){
//              playerToAdd = alreadyOnRoster;
//          } else {
//              playerToAdd = {
//                  title: player.name,
//                  url: player.url,
//                  salary: player.salary,
//                  budget: 0
//              }
//          }
//          playerToAdd.budget++;    
         
//          this.players[player.id] = playerToAdd;
//      }   
//  }
 
 
//  function hasProp(obj, prop){
    
//     if(obj[prop]){
//         return obj[prop]
//     } else {
//         return false
//     }
     
//  }

// // ----------Roster---------------------
// // jQuery magic button

// var buttons = jQuery('button');
 
//  function grabPlayer (e){
//      var btn = $(e.target);
//     var playerName = btn.closest('.players').attr('id');
//      for(var i = 0; i < nfl.players.length; i++){
//         var currentPlayer = nfl.players[i];
//         if(currentPlayer.id == playerId && currentPlayer.inStock()){
//            roster.addPlayer(currentPlayer);
//             currentPlayer.quantity--;
//             console.log(roster.players);
//         } 
//      } 
//  }
 
//  buttons.click(grabPlayer);
 
//  jQuery magic button

