var app  = app || {}  


app.CommentView = Backbone.View.extend({

  render:function() {
    var commentTemplate = $('#commentTemplate').html();
    var commentHTML = _.template(commentTemplate);
    this.$el.html(commentHTML(this.model.toJSON()));
    $('#comments').append(this.$el);
     
  }


});