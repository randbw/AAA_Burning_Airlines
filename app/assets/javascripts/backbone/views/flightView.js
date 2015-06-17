var app = app || {};
var res;
var view;
var total;
app.FlightView = Backbone.View.extend({

    el: '#main',

    events: {
        'click #seats tr .available': 'bookSpot',
    },

    render: function() {
        var flightTemplate = $('#flightTemplate').html();
        var flightHTML = _.template(flightTemplate);
        this.$el.html(flightHTML(this.model.toJSON()));
        view = this;
        this.addTable();
        this.checkReservations();
        setInterval(this.checkReservations, 1000);
    },

    addTable: function() {
        var airplane = new app.Airplane({
            id: this.model.get('airplane_id')
        });
        airplane.fetch().done(function() {

            var rows = airplane.get("rows");
            var columns = airplane.get("columns");
            total = rows * columns
            var $seats = $('#seats');

            var $table = $('<table/>');
            $table.attr('border', '1');

            var $tableBody = $('<TBODY/>');
            $table.append($tableBody);
            if (columns === 7 || columns === 9) {
              columns +=2
              } else {
            columns += 1
            }
            exitcolumns = columns - 2
            rows = rows + (Math.floor(rows/10))
            for (var i = 0; i < rows; i++) {
              if ( i % 10 == 0 && i > 9) {
                var $tr = $('<tr/>');
                $tr.addClass('exit')
                $tableBody.append($tr);
                $tr.append('<td class="leftexit"></td></tr>')
                for (var j = 0; j < exitcolumns; j++)
                {
                  $tr.append('<td class="filler"></td>')
                }
                $tr.append('<td class="rightexit"></td></tr>')
              } else {
                var $tr = $('<tr/>');
                $tableBody.append($tr);
                console.log(columns)
                for (var j = 0; j < columns ; j++) {
                    if (columns === 11 && (j === 3 || j === 7) || columns === 9 &&( j=== 2 || j === 6) ){
                      $tr.append('<td class="aisle"></td>')
                    }
                    else if (j === Math.floor(columns/2) && columns !== 9 && columns !== 11){
                      $tr.append('<td class="aisle"></td>')
                      }else{
                    var $td = $('<td/>');
                    $td.attr('width', '75').addClass('available').attr('id', 'id' + i + '_' + j);
                    $td.html((i+ 1) + "abcdefghijklmnop" [j]);
                    $td.appendTo($tr);
                    }
                }
                }
              
            }
            $seats.append($table);
        });

    },
    
    // Books a seat on click
    bookSpot: function(e) {
        // retrieve id of clicked cell
        var id = $(e.toElement).attr('id');
        var childtrue = document.getElementById('child').checked
            // changes clicked cell's class to unavailable
        if (child == true) {
            $('#' + id).attr('class', 'unavailable child');
        } else {
            $('#' + id).attr('class', 'unavailable');
        }
        // Retrieve row and column for reservation creation
        indexOfUnderscore = id.indexOf('_');
        indexOfIdEnd = 2;
        row = parseInt(id.slice(indexOfIdEnd, indexOfUnderscore));
        idLength = id.length;
        column = parseInt(id.slice(indexOfUnderscore + 1, idLength));

        res = new app.Reservation({
            row: row,
            column: column,
            flight_id: this.model.get('id'),
            user_id: currentUser,
            child: childtrue // gotten from script in landing
        });
        res.save();

    },

    // Checks if seats are reserved
    checkReservations: function() {
        if ($('.child').length > 10) {
            $('#main').html('<img src="http://img3.wikia.nocookie.net/__cb20090110204728/uncyclopedia/images/7/7a/Explode_fire.gif">')
            this.playBurn();
        }
        var balance
        // Get the reservations in json format
        $.ajax({
            url: '/flights/' + view.model.get('id') + '/reservations'
        }).done(function(data) { // Gets col and row of reservation and changes status
            $('.unavailable').attr('class', 'available')
            for (var i = 0; i < data.length; i += 1) {
                var row = data[i].row;
                var col = data[i].column;
                var idFormat = '#id' + row + '_' + col;

                if (data[i].child) {
                    $(idFormat).attr('class', 'unavailable child');
                } else {
                    $(idFormat).attr('class', 'unavailable');
                }
            }
            balance = total - data.length
            view.renderInfo(balance);    
        })

        
    },

    renderInfo: function(balance) {
        $('.reserveForm').css('display', 'block')
        var infoTemplate = $('#reservationInfoTemplate').html();
        var infoHTML = _.template(infoTemplate);
        $('.reserveForm').html(infoHTML({
            remaining: balance
        }));
    },


    playBurn: function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'assets/Disco-Inferno.m4a');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();


        audioElement.play();


    }

});
