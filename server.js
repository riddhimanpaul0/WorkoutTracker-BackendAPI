require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts.js')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/workouts', workoutRoutes)

const MONGO_URI = 'mongodb+srv://riddhimanpaul0:X8DyxeNG6PnCGLDZ@worktouttracker.ffld2dz.mongodb.net/?retryWrites=true&w=majority'


//connect to db
mongoose.connect(MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`app is running on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })

