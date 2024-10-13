const express = require('express');
const app = express();
const userRouter = require('./user');
const empRouter = require('./emp');
const SERVER_PORT = process.env.PORT || 3000;
const mongoose = require("mongoose")

const DB_CONNECTION_STRING ="mongodb+srv://hamedhaghani:0K7EhdYK1otXaZyQ@clusterone.jbgqy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne"

mongoose.connect(DB_CONNECTION_STRING, {
    // useNewUrlParser : true,
    // useUnifiedTopology: true
}).then(() =>{
    console.log("Connected to MongoDB")
}).catch((err) =>{
    console.log("Error" , err)
})


app.use(express.json());
app.use(express.urlencoded({}));
app.use("/api/v1/emp",empRouter);
app.use("api/v1/user",userRouter);





app.listen(SERVER_PORT, () =>{
    console.log(`Server is running on port 3000`)
})