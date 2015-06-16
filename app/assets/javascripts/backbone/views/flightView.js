var app = app || {};
var res
app.FlightView = Backbone.View.extend({

  el: '#main',

  events: {
    'click #seats tr td': 'bookSpot'
  },

  render: function() {
    var flightTemplate = $('#flightTemplate').html();
    var flightHTML = _.template(flightTemplate);
    this.$el.html(flightHTML(this.model.toJSON()));
    view = this;
    this.addTable();
  },

  addTable: function () {
    var airplane = new app.Airplane({ id: this.model.get('airplane_id') });
    console.log( this.model.get('airplane_id') );

    airplane.fetch().done( function () {
      console.log(airplane)

      var rows = airplane.get("rows");
      var columns = airplane.get("columns");
      var $seats = $('#seats');
        
      var $table = $('<table/>');
      $table.attr('border','1');
      
      var $tableBody = $('<TBODY/>');
      $table.append($tableBody);
        
      for (var i = 0; i < rows; i++){
        var $tr = $('<tr/>');
        $tableBody.append($tr);
         
         for (var j = 0; j < columns; j++){
            var $td = $('<td/>');
            $td.attr('width','75').addClass('available').attr('id','id' + i + '_' + j);
            $td.html("Cell " + i + "," + j);
            $td.appendTo($tr);
         }
      }
      $seats.append($table); 

    });   
  },
  
  bookSpot: function(e) {

    // Retrieve row and column for reservation creation
    var id = $(e.toElement).attr('id');
    indexOfUnderscore = id.indexOf('_');
    indexOfIdEnd = 2;
    row = id.slice(indexOfIdEnd,indexOfUnderscore);
    idLength = id.length;
    column = id.slice(indexOfUnderscore + 1,idLength);

    // Need to get user_id. AJAX maybe?
    // $.ajax({
    //   url: 
    // })

    res = new app.Reservation({
      row: row,
      column: column,
      flight_id: this.model.get('id'),
      user_id: 0 // don't know how to get this yet
    })


  }

});



















