var app = app || {}

//Collection of our particular model.
app.Posts = Backbone.Collection.extend({
    url: '/posts',
    model: app.Post
});