const mongoose = require ("mongoose")

const employeePageSchema = new mongoose.Schema({
    name:String,
    text: String,
    imageURL: String,
})

const employeePageModel = mongoose.model("Employee", employeePageSchema)
module.exports = employeePageModel;