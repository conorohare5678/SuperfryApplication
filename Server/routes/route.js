const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken');
const app = express()
const JWT_SECRET = process.env.JWT_SECERT_CODE
require('dotenv').config();
app.use(express.json())


//Schema imports
const User = require('../models/UserDetails')

//Sample user created
//const createSampleUser = async () =>{
//  const sampleUser = new User({
//        id: '1',
//        firstname: 'John',
//        lastname: 'Doe',
//        userName: 'John_Doe',
//        password: await bcrypt.hash('', 10),
//        userType: 'admin'

//    })
//    await sampleUser.save()
//}

//createSampleUser();

//login post api
router.post("/login-user", async (req, res) => {
    const { userName, password } = req.body;
  
    try {
      const user = await User.findOne({ userName });
  
      if (!user) {
        return res.json({ status: "error", error: "User not found!" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        const token = jsonwebtoken.sign({ userName: user.userName }, JWT_SECRET);
        res.json({ status: "ok", data: token });
      } else {
        res.json({ status: "error", error: "Invalid password" });
      }
    } catch (error) {
      res.json({ status: "error", error: "Internal server error" });
    }
  });
  
  module.exports = router;