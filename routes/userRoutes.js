const express = require('express');
const { Signup, Login } = require('../controllers/userControllers');
const router = express.Router();



router.post("/Signup" , Signup)  //here i have used controllers without "" wala hmne yaha functionality na dal ke 
                                 //usercontrollers me dali hai 


router.post("/Login" , Login )  //here i have used controllers without "" wala 

module.exports = router