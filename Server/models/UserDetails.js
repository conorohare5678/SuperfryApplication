const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    
    id: String,
    firstname: String,
    lastname: String,
    userName: String,
    password: String,
    userType: String,

})

const User = mongoose.model('User', UserSchema)
module.exports = User;