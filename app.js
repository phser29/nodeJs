const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');

//라우팅
app.get('/', (req, res) => {
  res.render('index'); // ./views/index.ejs
})

app.get('/profile', (req, res) => {
  res.render('profile'); // ./views/index.ejs
})


app.listen(port, () => {
  console.log(`서버가 실행되었습니다. ${port}`)
})