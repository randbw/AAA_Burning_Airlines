var app = app || {}

var test
app.FlightView = Backbone.View.extend({

  el: '#main',

  render: function() {
    var flightTemplate = $('#flightTemplate').html();
    var flightHTML = _.template(flightTemplate);
    this.$el.html(flightHTML(this.model.toJSON()));
    view = this

  },
  tablecreate: function () {
    var seats = $('#seats');
    var rows = '';
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border','1');
    var tbdy = document.createElement('tbody');
    for (var i=0; i<3; i++) {
        var tr = document.createElement('tr');
        for ( var j=0; j<2; j++) {
            if ( i==2 && j==1 ) {
                    break
                     } else {
            var td = document.createElement( 'td' );
            td.appendChild( document.createTextNode( '\u0020' ) );
            i==1 && j==1?td.setAttribute('rowSpan','2'):null;
            tr.appendChild(td)
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
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
