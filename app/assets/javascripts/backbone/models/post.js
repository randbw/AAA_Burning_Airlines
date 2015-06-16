var app = app || {}


//Model.
//
//
//
app.Post = Backbone.Model.extend({
    urlRoot: '/posts',
    defaults: {
        name: 'Untitled Post',
        content: 'Untitled Post Content'
    }
});


