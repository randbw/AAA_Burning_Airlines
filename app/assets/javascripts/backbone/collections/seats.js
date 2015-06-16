var app = app || {}

app.Seats = Backbone.Collection.extend({
  url: function() {
    return '/flights/' + this.flight_id + '/seats';
  },

  model: app.Seat,

  initialize: function(options) {
    this.flight_id = options.flight_id
    this.on('add', function(seat) {
      var seatView = new app.SeatView({model: seat});
      seatView.render();
    });
  }
});


// var Seats = new app.Seats({post_id: 75})