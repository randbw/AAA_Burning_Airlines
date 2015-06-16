var app  = app || {}  

var test
app.FlightView = Backbone.View.extend({

  el: '#main',

  render:function() {
    var flightTemplate = $('#flightTemplate').html();
    var flightHTML = _.template(flightTemplate);
    this.$el.html(flightHTML(this.model.toJSON()));
    view = this
    this.seats = new app.Seats({flight_id: this.model.get('id')});
    this.seats.fetch().done(function(){
    if (view.seats.length === 0)  {
    for (var i = 0 ; i <= (view.model.toJSON().passengers); i+= 1) {
    seatAssign = view.seatGen(i)
    var seat = new app.Seat({
      flight_id: view.model.get('id'), 
      seatnum: seatAssign,
      available: 'available'
    });
    seat.save()
    view.seats.fetch()
    }
  };
  })
    
     
  },


  seatGen:function(num) {
    alpha = ''
    if (num % 6 == 0)  {
      alpha = "h"
    } else if (num % 5 == 0) {
      alpha = "g"
    } else if (num % 4 == 0){
      alpha = "f"
    } else if (num % 3 == 0){
      alpha = "c"
    } else if (num % 2 == 0){
      alpha = "b"
    } else {
      alpha = "a"
    }
    numeric = String((Math.floor(num/6)))
    return alpha + numeric
  }

  // events: {
  //   'click button': 'submitSeat'
  // },

  // submitSeat: function(e) {
  //   e.preventDefault();

  //   var author = $('#author').val();
  //   var content = $('#content').val();

  //   $('#author, #content').val('') //Reset form for reuse

  //   var seat = new app.Seat({
  //     author: author,
  //     content: content,
  //     flight_id: this.model.get('id')
  //   });
  //   var view = this
  //   seat.save().done(function () {
  //     view.seat.fetch();
  //   });
  //   // this.comments.add(comment)

  // }



});