var app = app || {}

_.templateSettings = {
    evaluate: /\{\[([\s\S]+?)\]\}/g, // {[ console.log("Hello"); ]} - runs
    interpolate: /\{\{([\s\S]+?)\}\}/g // {{ key }} - interpolates
};





var test

$(document).ready(function() {
    app.burningFlights = new app.Flights();
    app.burningFlights.fetch().done(function() { // On Tuesday we wear pink.
        app.router = new app.AppRouter();
        Backbone.history.start() //{pushState: Modernizr.history}
    });
    var today = $('#date').val()
    $('#Search').on('click', function(e) {
        e.preventDefault();
        var origin = $('#origin').val();
        var destination = $('#destination').val();
        var date = $('#date').val();
        // Reset the form for re-use.
        var flight = new app.Flights
        flight.fetch().done(function() {
            if (date == today) {
                var searched = flight.where({
                    origin: origin,
                    destination: destination,
                });
            } else {
                var searched = flight.where({
                    origin: origin,
                    destination: destination,
                    date: date
                })
            }
            $('#flights').html('')
            for (var i = 0; i < searched.length; i += 1) {
                var flightListView = new app.FlightListView({
                    model: searched[i]
                });
                flightListView.search();
                test = flight
            };
        });
    });
    
});
