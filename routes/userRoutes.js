const express = require('express');
const router = express.Router();



router.post("/Signup" , (req,res) => {
    try {
        
        return res.send("Signup");

    } catch (error) {
        console.log(error);
    }
})


router.post("/Login" , (req,res) => {
    try {
        
        return res.send("Login");

    } catch (error) {
        console.log(error);
    }
})

module.exports = router