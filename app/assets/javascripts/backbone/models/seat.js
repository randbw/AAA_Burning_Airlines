var app = app || {};

app.Seat = Backbone.Model.extend ({
  urlRoot: function() {
    return '/flights/' + this.get('flight_id') + '/seats';
  },
});