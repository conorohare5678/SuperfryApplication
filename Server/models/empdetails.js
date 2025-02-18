const mongoose = require('mongoose')

const empdetailsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    Status: String
})

const empdetailsmodel = mongoose.model("empdetails", empdetailsSchema)
module.exports = empdetailsmodel;