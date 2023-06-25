
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const userRoute = require("./routes/userRoute");

const app = express();

app.listen(process.env.PORT || 5600, () => {
    console.log('Backend Server is running on',process.env.PORT);
})

// middleware 
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

mongoose.connect(process.env.MONGD_URI)
        .then(() => {
        console.log('MongoDB connection successful');

})      .catch((error) => {
            console.log(error)
})

app.use("/api/users", userRoute)