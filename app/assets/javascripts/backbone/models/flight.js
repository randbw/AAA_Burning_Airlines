var app = app || {}


//Model.
//
//
//
app.Flight = Backbone.Model.extend({
    urlRoot: '/flights',
    defaults: {
        name: 'Unnamed Flight',
        passengers: 50
    }
});


