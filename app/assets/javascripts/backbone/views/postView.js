var app  = app || {}  


app.PostView = Backbone.View.extend({

  el: '#main',

  render:function() {
    var postTemplate = $('#postTemplate').html();
    var postHTML = _.template(postTemplate);
    this.$el.html(postHTML(this.model.toJSON()));

    this.comments = new app.Comments({post_id: this.model.get('id')});
    this.comments.fetch()
      
  },

  events: {
    'click button': 'submitComment'
  },

  submitComment: function(e) {
    e.preventDefault();

    var author = $('#author').val();
    var content = $('#content').val();

    $('#author, #content').val('') //Reset form for reuse

    var comment = new app.Comment({
      author: author,
      content: content,
      post_id: this.model.get('id')
    });
    var view = this
    comment.save().done(function () {
      view.comments.fetch();
    });
    // this.comments.add(comment)

  }



});