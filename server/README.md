Reservations API

ROUTES:

---------------------------------------------------------------------------------
Get reservations by listing ID.

`GET: /api/listings/:listingid/reservations`

Uses the listing ID to find all reservations for a particular listing and return them in JSON object.

eg:

`/api/reservations/35`

On success:

`Status Code: 200`

Return Data:
``` javascript
[{
  ID: 1,
  startDate: '2019-09-16',
  endDate: '2019-09-19',
  numGuests: '2',
  numInfants: '0',
  listingID: 35
}]
```

On failure:

`Status Code: 404`

Return Data: `{}`

---------------------------------------------------------------------------------
Get a single reservation by reservation ID.

`GET: /api/reservations/:reservationid`

Uses the reservation ID to find a particicular reservation and return it.

eg:

`/api/reservation/4`

On success:

`Status Code: 200`

Return Data:
``` javascript
{
  ID: 4,
  startDate: '2019-12-13',
  endDate: '2019-12-23',
  numGuests: '1',
  numInfants: '0',
  listingID: 35
}
```

On failure:

`Status Code: 404`

Return Data: `{}`


---------------------------------------------------------------------------------
Create a new reservation.

`POST: /api/listings/:listingid/reservations`

Creates a new reservation for the listing ID. The reservation information is passed as part of the request body. Returns newly created reservation on success.

eg:

`/api/reservations/13`

On success:

`Status Code 201`

Return Data:
``` javascript
{
  ID: 15,
  startDate: '2019-10-15',
  endDate: '2019-10-17',
  numGuests: '3',
  numInfants: '0',
  listingID: 13
}
```

On failure:

`Status Code 400`



---------------------------------------------------------------------------------
Update a reservation.

`PUT: /api/reservations/:reservationid`

Updates an existing reservation for a listing. Uses the request body to pass the updated reservation information. Return updated reservation object on success. Requires reentry of all fields even if they are not changing.

eg:

`/api/reservations/12`

On success:

`Status Code: 201`

Return Data:
``` javascript
{
  ID: 15,
  startDate: '2019-10-06',
  endDate: '2019-10-08',
  numGuests: '2',
  numInfants: '0',
  listingID: 13
}
```

On failure:

`Status Code 404`

---------------------------------------------------------------------------------
Delete a reservation.

`DELETE: /api/reservations/:reservationid`

Deletes an existing reservation.

eg:

`/api/reservations/12`

On success:

`Status Code: 200`


On failure:

`Status Code: 404`

