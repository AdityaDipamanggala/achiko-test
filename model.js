const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: [true, "Email has been used"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "Email can't be empty"]
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        min: [6, "Password is too weak"]
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
})

userSchema.pre('save', function(next){
    let user = this
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password,salt)
    user.password = hash
    next()
})

module.exports = mongoose.model('User',userSchema)