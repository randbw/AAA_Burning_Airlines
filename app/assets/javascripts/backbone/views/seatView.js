var app  = app || {}  


app.SeatView = Backbone.View.extend({

  render:function() {
    var seatTemplate = $('#seatTemplate').html();
    var seatHTML = _.template(seatTemplate);
    this.$el.html(seatHTML(this.model.toJSON()));
    $('#seats').append(this.$el);
  },

  events: {
    'click .available' : 'bookSeat'
  },

  bookSeat: function(){
    access = $(this)
    id = access[0].el.children[0].id
    jQid = '#' + String(id)
    $(jQid).attr('class', 'seat unavailable')
    var mySeat = new app.Seat({id: id});
    mySeat.fetch();
    mySeat.attributes.available = 'unavailable'
    mySeat.save()  }
    
});