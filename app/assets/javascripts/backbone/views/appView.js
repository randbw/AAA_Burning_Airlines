var app = app || {};


app.AppView = Backbone.View.extend({
    el: '#main',

    render: function() {
        var appHTML = $('#appTemplate').html();
        this.$el.html(appHTML)

        this.collection.each(function(post) {
            var postListView = new app.PostListView({model: post});
            postListView.render();
        });
    }


});