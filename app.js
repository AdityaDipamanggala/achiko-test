const express = require("express")
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

// mongoose.connect("mongodb://localhost:27017/achikoLogin",{useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect('mongodb+srv://dbUser:password23@cluster0.dfa35.mongodb.net/dbUser?retryWrites=true&w=majority')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/", require('./routes'))
app.listen(PORT,() => {
    console.log("User's server running on port", PORT);
})