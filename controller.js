const mongoose = require('mongoose')
const User = require('./model')
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController{
    static register(req,res){
        const newUser = new User ({
            _id : new mongoose.Types.ObjectId(),
            email : req.body.email,
            password : req.body.password,
            name : req.body.name,
            address: req.body.address
        })
        newUser.save()
        .then(data => res.status(200).json({message: 'Register Successful'}))
        .catch(err => {
            res.status(500).json({message: "Internal Server Error", err})
            console.log(err)
        })
    }
    static login(req,res){
        User.findOne({email: req.body.email})
        .then(data => {
            if(data && bcrypt.compareSync(req.body.password,data.password)){
                let token = jwt.sign({id: data._id, email: data.email,name: data.name, address: data.address},'jwt-key')
                res.status(200).json({message: 'Login successfully', acess_token: token})
            }
            else res.status(400).json({message: 'Invalid User'})
        })
        .catch(err =>{ 
            res.status(500).json({message: 'Internal Server Error'})
            console.log(err)
        })
    }
    static getUser(req, res){
        let {access_token} = req.headers
        console.log(access_token);
        try{
        let decode = jwt.verify(access_token,'jwt-key')
        console.log(decode.email);
        User.findOne({email: decode.email})
        .then(data => res.status(200).json({data: data}))
        }
        catch(err){
            res.status(404).json({message: "Invalid Token"})
        }
    }
}

module.exports = UserController