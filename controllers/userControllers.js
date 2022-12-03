const usermodel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
SECRET_KEY = "NOTESAPI"

const Signup = async (req,res) => {

    // const {Firstname,Lastname,Email,Password} = req.body;

    var salt =  bcrypt.genSaltSync(10);

    try {
        
        var hash = bcrypt.hashSync(req.body.Password)
        const Firstname  = req.body.Firstname;
        const Lastname  = req.body.Lastname;
        const Email  = req.body.Email;
        const Password  = req.body.Password;
        const oldUser = await User.findOne({ Email });
        const letters = /^[a-zA-Z]*$/;


    if ( !(Firstname.match(letters)) || !(Lastname.match(letters))) {
        return res.status(400).send("Name Does not contain Special Character")
    }
    else if(!(Firstname && Lastname && Email && Password)){
        return res.status(400).send("You are missing something");
    }
    else if (Firstname === Lastname) {
        return res.status(400).send("Firstname and Lastname should not be same");
    }
    else if (Password.length < 8) {
      return res.status(400).send( "Your Password must be atleast 8 characters" );
    }
    else if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
        else{
            await usermodel.create({
                Firstname : req.body.Firstname,
                Lastname : req.body.Lastname,
                Email : Email,
                Password : hash
            });
        }
        const token = jwt.sign({Email : Email,id : _id}, SECRET_KEY);
        res.status(200).send({user : "user created succesfully" , token : token})
    
    }
    catch (error) {
        console.log(error);
    }
}

const Login = (req,res) => {

    try {

        

    } catch (error) {
        console.log(error);
    }

}

module.exports = {Signup,Login}