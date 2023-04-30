require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts.js')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/workouts', workoutRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(process.env.PORT || 4000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})