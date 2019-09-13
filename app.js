const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

// app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/testSsoCallback', (req, res) => {
  console.log('Entered GET method')
  console.log('=====')
  console.log(req.url + ' --- ' + req.params)
  console.log('=====')
  console.log(req.headers)
  console.log('=====')
  console.log(req.body)
  console.log('=====')
  res.send('Hello from GET!')
})

app.post('/testSsoCallback', (req, res) => {
  console.log('Entered POST method')
  console.log('=====')
  console.log(req.url + ' --- ' + req.params)
  console.log('=====')
  console.log(req.headers)
  console.log('=====')
  console.log(req.body)
  console.log('=====')
  res.send('Hello from POST!')
})

app.listen(port, () => console.log('Example app listening on port ${port}!'))