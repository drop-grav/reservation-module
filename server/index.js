require('newrelic');
const express = require('express')
const app = express()
const port = 3002
const bodyParser = require('body-parser');
const cors = require('cors')
const { getListingDataByListingId, getReservationsByListingId, getReservationByReservationId, createReservation, updateReservation, deleteReservation } = require('../database/controllers.js');



// app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});
app.use(express.static('public'))
app.use(`/listing/:id`, express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get listing data according to the ID
app.get('/api/listings/:id', (req, res) => {
  const { id } = req.params;
  console.log('here')
  getListingDataByListingId(req, res, id);
})

//get reservations data according to listing ID
app.get('/api/listings/:listingid/reservations', (req, res) => {
  const { listingid } = req.params;
  getReservationsByListingId(req, res, listingid);

})

// get a single reservation by reservation id
app.get('/api/reservations/:reservationid', (req, res) => {
  const { reservationid } = req.params;
  getReservationByReservationId(req, res, reservationid);
})

// create new reservation
app.post('/api/listings/:listingid/reservations', (req, res) => {
  const { listingid } = req.params;
  const reservationData = req.body;
  createReservation(req, res, listingid, reservationData);
})

// update reservation
app.put('/api/reservations/:reservationid', (req, res) => {
  const { reservationid } = req.params;
  const reservationData = req.body;
  updateReservation(req, res, reservationid, reservationData);
})

// delete reservation
app.delete('/api/reservations/:reservationid', (req, res) => {
  const { reservationid } = req.params;
  deleteReservation(req, res, reservationid);

})

app.listen(port, () => console.log(`Reservations module listening on port ${port} `))
