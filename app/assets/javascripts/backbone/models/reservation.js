var app = app || {};

app.Reservation = Backbone.Model.extend ({
  urlRoot: function() {
    return '/flight/' + this.get('flight_id') + '/reservations';
  },
});