const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
  console.log(`Got body: ${req.body}`)
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

