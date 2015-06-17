# Flaming Airlines 
## Team project by: Aaron, Alan and Andrew

### Requirements

An admin can create planes on the /airplanes page.

A plan has a name, rows, and columns.

When a new plane is saved the page should show a seating diagram.

An admin can create flights on the /flights page.

A flight has a flight number, origin, destination, date, and plane.

When a new flight is saved, the page should show a list with the newest date at the top of the list and the number of available seats on the plane.

A user can search for flights on the /search page. The search page should have an input form for the origin and destination. When a user creates a search, the page should show a list of flights with the newest date at the top, and include the number of available seats on the flight.

When the user selects a flight, we should go to the show page ie, /flights/3. The plane show page should show a seating diagram with available seats and seats that have been selected, with their names.

A user can select a seat.

When a seat is saved, the available seats on the /flights page should update.

### Done with rails and backbone