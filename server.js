const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use('/azmoon/',require('./routes/azmoon/azmoon'))
app.use('/todo/lesson/',require('./routes/todo/lesson'))
app.use('/todo/week/',require('./routes/todo/week'))
const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
    console.log('started On ' + PORT)
})