var app = app || {}

var test
app.FlightView = Backbone.View.extend({

  el: '#main',

  render: function() {
    var flightTemplate = $('#flightTemplate').html();
    var flightHTML = _.template(flightTemplate);
    this.$el.html(flightHTML(this.model.toJSON()));
    view = this

  },

  addTable: function () {
    var airplane = new app.Airplane({ id: this.model.get('airplane_id') });
    airplane.fetch().done( function () {
      var rows = airplane.get("rows");
      var columns = airplane.get("columns");
      var $seats = $('#seats');
        
      var $table = $('<table/>');
      $table.attr('border','1');
      
      var $tableBody = $('<TBODY/>')
      $table.append($tableBody)
        
      for (var i = 0; i < rows; i++){
        var $tr = $('<tr/>')
         $tableBody.append($tr);
         
         for (var j = 0; j < columns; j++){
            var $td = $('<td/>');
            $td.attr('width','75');
            $td.html("Cell " + i + "," + j);
            $td.appendTo($tr)
         }
      }
      $seats.append($table); 

    });   
  }
});
