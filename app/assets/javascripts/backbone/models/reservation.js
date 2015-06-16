var app = app || {};

app.Reservation = Backbone.Model.extend ({
  urlRoot: function() {
    return '/users/' + this.get('flight_id') + '/reservations';
  },
});