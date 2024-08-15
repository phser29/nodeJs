const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');


//라우팅
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/test', (req, res) => {
  res.send('test!')
})

app.listen(port, () => {
  console.log(`서버가 실행되었습니다. ${port}`)
})