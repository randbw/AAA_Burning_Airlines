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
    console.log('lol')
    e.preventDefault();
    console.log('lol')
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var date = $('#date').val();
     // Reset the form for re-use.

    var flight = new app.Flights
    flight.fetch().done(function() {
    var searched = flight.where({
      origin: origin,
      destination: destination,
      date: date
      });
    $('#flights').html('')
    for (var i = 0; i < searched.length; i+=1){   
    var flightListView = new app.FlightListView({model: searched[i]});
    flightListView.search();
    test = flight
  }
  })
  })
});