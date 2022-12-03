const usermodel = require("../models/user");

const Signup = (req,res) => {

    try {
        
        return res.send("Signup");

    } catch (error) {
        console.log(error);
    }
    
}

const Login = (req,res) => {

    try {
        
        return res.send("Login");

    } catch (error) {
        console.log(error);
    }

}

module.exports = {Signup,Login}