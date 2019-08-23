const express = require ('express')
const app = express()
const port = 3000
const db = require('../database-mysql');



app.use(express.static('public'))

app.get('/s', (req, res) => {
  res.send("tesing is working")
})

app.listen(port, ()=> console.log(`Reservations module listening on port ${port}`))