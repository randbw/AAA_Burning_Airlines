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

  showFlight : function() {

    app.router.navigate('flights/' + this.model.get('id'), true);
  }
})