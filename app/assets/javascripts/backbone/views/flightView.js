var app = app || {}

var test
app.FlightView = Backbone.View.extend({

  el: '#main',

  render: function() {
    var flightTemplate = $('#flightTemplate').html();
    var flightHTML = _.template(flightTemplate);
    this.$el.html(flightHTML(this.model.toJSON()));
    view = this
    this.addTable();

  },

  addTable: function () {
    var airplane = new app.Airplane({id: this.model.get('airplane_id')});
    console.log(this.model.get('airplane_id'));
    var rows = airplane.row;
    var columns = airplane.columns;
    var $seats = $('#seats');
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i = 0; i < rows; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j = 0; j < columns; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    $seats.append(table);    
}
});
