Reservations API

ROUTES:

---------------------------------------------------------------------------------
Get reservations by listing ID
GET: /api/reservations/:listingid

Uses the listing ID in req.params to find all reservations for a particular listing and return them in JSON object.

eg:
/api/reservations/35
On success:
Status Code: 200
Return Data:
[{
  ID: 1,
  startDate: '2019-09-16',
  endDate: '2019-09-19',
  numGuests: '2',
  numInfants: '0',
  listingID: 35
}]

On failure:
Status Code: 204
Return Data: {}

---------------------------------------------------------------------------------
Get a single reservation by reservation ID
GET /api/reservation/:reservationid

Uses the reservation ID in req.params to find a particicular reservation and return it.

eg:
/api/reservation/4
On success:
Status Code: 200
Return Data:
{
  ID: 4,
  startDate: '2019-12-13',
  endDate: '2019-12-23',
  numGuests: '1',
  numInfants: '0',
  listingID: 35
}

On failure:
Status Code: 204
Return Data: {}


---------------------------------------------------------------------------------
Create a new reservation
POST: /api/reservations/:listingid

Creates a new reservation for the listing ID req.params. The reservation information is passed as part of the req.body. Returns newly created reservation on success.

eg:
/api/reservations/13
On success:
Status Code 201
Return Data:
{
  ID: 15,
  startDate: '2019-10-15',
  endDate: '2019-10-17',
  numGuests: '3',
  numInfants: '0',
  listingID: 13
}

On failure:
Status Code 204



---------------------------------------------------------------------------------

PUT: /api/reservations/:reservationid

Updates an existing reservation for a listing.  Uses req.params to pass the target reservations ID, and use req.body to pass the updated reservation information. Return updated reservation object on success.

eg:
/api/reservations/12
On success:
Status Code: 201
Return Data:
{
  ID: 15,
  startDate: '2019-10-06',
  endDate: '2019-10-08',
  numGuests: '2',
  numInfants: '0',
  listingID: 13
}

On failure:
Status Code 204

---------------------------------------------------------------------------------

DELETE: /api/reservations/reservationid

Deletes an existing reservation passing the id of the target reservation to delete into req.params. Return object deleted on success.

eg:
/api/reservations/12
On success:
Status Code: 200
Return Data: {
  ID: 12,
  startDate: '2019-04-20',
  endDate: '2019-05-08',
  numGuests: '2',
  numInfants: '0',
  listingID: 15
}

On failure:
Status Code: 204

