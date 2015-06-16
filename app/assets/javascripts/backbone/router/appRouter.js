var app = app || {}


app.AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'posts/:id': 'viewPost'
    },

    index: function() {
        var appView = newew app.AppView({
            collection: app.blogPosts
        });
        appView.render();
    },

    viewPost: function(id) {
        app.post = app.blogPosts.get(id);
        app.postView = new app.PostView({model : app.post})
        app.postView.render();
    }

});