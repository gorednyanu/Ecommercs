require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productroutes')


connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`server running on port ${PORT }`))