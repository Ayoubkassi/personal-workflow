// const express = require('express')
// const cors = require('cors')
// require('dotenv').config()
// const PORT =  5000

// const app = express()
// app.use(cors())

// app.use(express.static('public'))

const sum = (a , b) => {
  return a+b;
}

// app.get('/', (req, res) => {
//   res.send('Bismi Allah')
// })

// app.listen(PORT, () => {
//   console.log(`App is listening on port ${PORT}`)
// })

module.exports = sum;
