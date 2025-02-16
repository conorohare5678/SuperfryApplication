const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5322;
const cors = require("cors")
require('dotenv').config();
app.use(cors());
app.use(express.json())

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>{
        console.log("Connected to Database");

        const AppRoute = require("../Server/routes/route")
app.use('/', AppRoute)
    })
    .catch((e) =>{
        console.log("error: ", e)
    })



app.listen(PORT, () =>{
    console.log('Server Started')
})