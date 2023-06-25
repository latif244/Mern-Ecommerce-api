const mongoose = require("mongoose")
const Schema = mongoose.Schema


const OrderSchema = new mongoose.Schema({
    title: {
        name: String,
        type: String,
        required: true,
        unique: true,
    },
    description: {
        name: String,
        type: String,
        required: true,
        
    }
    
})