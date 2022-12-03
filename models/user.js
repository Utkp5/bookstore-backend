const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    Firstname : {
        type : String,
        require : true,
    },
    Lastname : {
        type : String,
        require : true,
    },
    Email : {
        type : String,
        require : true,
    },
    Password : {
        type : String,
        require : true,
    },

}, {timestamps : true});

module.exports = mongoose.model("User",UserSchema);