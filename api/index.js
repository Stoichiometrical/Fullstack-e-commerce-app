const express = require('express')
const app = express();
const PORT = 5000
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config()
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/orders",orderRoute)

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DB connection established')
}).catch((err)=>{
    console.log(err)
})


// port from .env =process.env.PORT ||
app.listen( PORT,()=>{
    console.log('Backend listening on port' + PORT)
})

