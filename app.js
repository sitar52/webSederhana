const express = require('express')
const app = express()

const PORT = 3000

app.set ('view engine', 'ejs')
app.use (express.urlencoded({extended:true}))
app.use(express.static('public'))

const indexRouter = require('./routes/index.js')

app.use('/', indexRouter)



app.listen (PORT, ()=>{
    console.log(`localhost ${PORT}`)
})