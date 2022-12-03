const express = require('express');
const app = express();
const PORT = 5000;




const routes = require("../routes/userRoutes")
app.use("/api",routes)

const dbConfig = require("../service/dbConfig");
dbConfig();


//testing
app.get("/" , function (req,res) {
    return res.send("all working fine");
})


app.listen(PORT , function(error) {
    if (error) {
        console.log("Error in strting the server");
    }
    console.log(`Server Started Successfully on PORT : ${PORT}`);
});