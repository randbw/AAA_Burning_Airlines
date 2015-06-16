var app = app || {};

// Model

app.Airplane = Backbone.Model.extend({
 urlRoot: function () {
  return '/airplanes/' + this.get('airplane_id')
 }
});