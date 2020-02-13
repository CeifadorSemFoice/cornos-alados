const express = require('express')
const homeRoute = require('./routes/home')
const secretRoute = require('./routes/secret')
const cors = require('cors')
const { join } = require('path')

require('./config/database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(homeRoute)
app.use('/c31f41g0rluh3c4luc4p5z3t4cud1', secretRoute)

app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

const PORT = process.env.PORT || 3000
app.set('PORT', PORT)

app.listen(app.get('PORT'), () => {
  console.log(`Server running on port ${app.get('PORT')}`)
})
