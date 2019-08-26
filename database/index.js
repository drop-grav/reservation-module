const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

//get listing information of the listing defined by the id
var getListing = (id, callback) => {
  connection.query(`SELECT * FROM listing WHERE ID = ${id}`, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      callback(res)
    }
  })
}

//get all reservations according to the listing id
var getReservations = (id, callback) => {
  connection.query(`SELECT * FROM reservedDates WHERE listingID = ${id}`, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      callback(res)
    }
  })
}
module.exports = {
  getListing,
  getReservations,
}