$( document ).ready(function() {
  var x = new Stock();
  for (var i = 0; i <= 9; i++) {
    $('#cardPile').append(new Card(i).div);

  }

  $( ".dragdrop"  ).draggable({
    helper: "clone",
    revert: "invalid"
  });

  $( "#cardSlots" ).droppable({
    drop: function( event, ui ) {
      var a = ui.draggable.context;
      var b = $(a).attr("id");
      if(x.cards.length < 10){
        x.cards.push(parseInt(b));
        $('#cardSlots').append('<div>'+ b +'</div>');
        var count = 0;
        for (index = 0; index < x.cards.length; index++) {
          count += x.cards[index];
          console.log(count);
        }
        $("#total_sum").html(count);
      }
    }
  });

  function Card(num) {
    this.num = num;
    this.div = '<div id="'+this.num+'"class="dragdrop">'+ this.num +'</div>';
  }

  Card.prototype.number = function(){
    return this.num;
  }


  function Stock() {
    this.cards = [];
  }

  Stock.prototype.addCard = function(num){
    this.cards.push(num);
  }

});