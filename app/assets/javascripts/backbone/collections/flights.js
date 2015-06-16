var app = app || {}

//Collection of our particular model.
app.Flights = Backbone.Collection.extend({
    url: '/flights',
    model: app.Flight
});