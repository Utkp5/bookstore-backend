const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
        
        await mongoose.connect("mongodb://localhost:27017/bookstore", {

            useUnifiedTopology : true,
            useNewUrlParser : true,
        });
        console.log("Mongodb Connected Successfully");
    } catch (error) {
        console.log("Error in connecting mongodb");
    }
}

module.exports = dbconnect;