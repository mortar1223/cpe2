const express = require('express')
const app = express()
const port = 8021

app.get('/', (req, res) =>
  res.send('Greetings from Mortar...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
