const mongoose = require("mongoose")


const BoilerPlateSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:[true, "First Name is required"],
        minLength: [3, "First Name must be at least 3 chars"],
        maxLength: [50, "First Name can't be that long"]
    },
    last_name:{
        type: String,
        required:[true, "Last Name is required"],
        minLength: [3, "Last Name must be at least 3 chars"],
        maxLength: [50, "Last Name can't be that long"]
    },
    graduation_date: {
        type: Date,
        required: [true, "Graduation date is required"]
    },
    profilePic: {
        type: String,
        required: [true, "Pro Pic is required"]
    },
    numberOfBelts: {
        type: Number,
        default:0
    },

    isVeteran: {
        type: Boolean
    }


}, {timestamps:true})


const BoilerPlate = mongoose.model("BoilerPlate", BoilerPlateSchema );

module.exports = BoilerPlate;
