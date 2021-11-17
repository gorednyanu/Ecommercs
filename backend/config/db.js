require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://admin-1234:admin-1234@usercluster.ygl3d.mongodb.net/shop?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connection SUCCESS");
    }catch(error){
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
} 



module.exports = connectDB;