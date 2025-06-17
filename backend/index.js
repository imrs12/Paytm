const express = require("express");
const mongoose = require("mongoose")
const app = express();
const mainRouter = require("./routes/index")

app.use("/api/v1/", mainRouter)

async function main(){
    await mongoose.connect("mongodb://localhost:27017/paytm");
    console.log("connected to database")
}

main()

app.listen(3000)



