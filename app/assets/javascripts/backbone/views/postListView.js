var app = app || {}


app.PostListView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click' : 'showPost'
  },

  render: function() {
    var postListTemplate = $('#postListTemplate').html();
    var postListHTML = _.template(postListTemplate)
    this.$el.html(postListHTML(this.model.toJSON()));
    $('#posts').append(this.$el);
  },

  showPost : function() {
    app.router.navigate('posts/' + this.model.get('id'), true);
  }
})