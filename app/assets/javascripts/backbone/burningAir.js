var app = app || {}

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};







$(document).ready(function() {
    app.burningFlights = new app.Flights();
    app.burningFlights.fetch().done(function() { // On Tuesday we wear pink.
    app.router = new app.AppRouter();
    Backbone.history.start() //{pushState: Modernizr.history}
});

});
