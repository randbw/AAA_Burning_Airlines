var app = app || {}


app.FlightListView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click' : 'showFlight'
  },

  render: function() {
    var flightListTemplate = $('#flightListTemplate').html();
    var flightListHTML = _.template(flightListTemplate)
    this.$el.html(flightListHTML(this.model.toJSON()));
    $('#flights').append(this.$el);
  },

  search: function() {
    
    var flightListTemplate = $('#flightListTemplate').html();
    var flightListHTML = _.template(flightListTemplate)
    this.$el.html(flightListHTML(this.model.toJSON()));
    $('#flights').append(this.$el);
  },

  showFlight : function() {

    app.router.navigate('flights/' + this.model.get('id'), true);
  }

})

var test
$(document).ready(function() {
$('#Search').on('click', function(e){
    var today = $('#date').val() 
    e.preventDefault();
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var date = $('#date').val();
     // Reset the form for re-use.

    var flight = new app.Flights
    flight.fetch().done(function() {
      if (date == today ){
      var searched = flight.where({
      origin: origin,
      destination: destination,
      });    
      }
      else {
    var searched = flight.where({
      origin: origin,
      destination: destination,
      date: date
      })
    }
    $('#flights').html('')
    for (var i = 0; i < searched.length; i+=1){   
    var flightListView = new app.FlightListView({model: searched[i]});
    flightListView.search();
    test = flight
  }
  })
  })
});