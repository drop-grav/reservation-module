const { Pool } = require('pg');
const config = require('./config.js')
const pool = new Pool(config);

pool.connect();

const getListingDataByListingId = (req, res, id) => {
  pool.query(`SELECT * FROM listing where id=${id}`)
    .then(data => res.status(200).json(data.rows))
    .catch(err => res.status(400).json({ err }))
}

const getReservationsByListingId = (req, res, listingid) => {
  pool.query(`SELECT id, startDate, endDate, numGuests, numInfants, listingID FROM reserveddates where listingid=${listingid}`)
    .then(data => res.status(200).json(data.rows))
    .catch(err => res.status(400).end())
}

const getReservationByReservationId = (req, res, reservationid) => {
  pool.query(`SELECT * FROM reserveddates where id = ${reservationid}`)
    .then(data => res.status(200).json(data.rows))
    .catch(err => res.status(404).end())
}

const createReservation = (req, res, listingid, reservationData) => {
  const query = {
    text: 'INSERT INTO reserveddates (startDate, endDate, numGuests, numInfants, listingid) VALUES($1, $2, $3, $4, $5)',
    values: [reservationData.startDate, reservationData.endDate, reservationData.numGuests, reservationData.numInfants, listingid]
  }
  pool.query(query)
    .then(data => res.status(201).end())
    .catch(err => res.status(400).end())
}

const updateReservation = (req, res, reservationid, reservationData) => {
  let counter = 0;
  let set = [];
  Object.keys(reservationData).forEach(item => {
    set.push(`${item} = ($${counter += 1})`)
  })

  const query = {
    text: `UPDATE reserveddates SET ${set} WHERE id = ($${counter += 1})`,
    values: Object.values(reservationData).concat(Number(reservationid))
  }

  console.log(query.text)


  pool.query(query)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json(err))
}

const deleteReservation = (req, res, reservationid) => {
  pool.query(`DELETE FROM reserveddates WHERE id = ${reservationid}`)
    .then(() => res.status(200).end())
    .catch(err => res.status(404).end())
}


module.exports = {
  getListingDataByListingId,
  getReservationsByListingId,
  getReservationByReservationId,
  createReservation,
  updateReservation,
  deleteReservation
}

