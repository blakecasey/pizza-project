const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    phone:{
        type:String
    },
    email: {
        type:String
    },
    crust:{
        type:String
    },
    size:{
        type:String
    },
    toppings:{
        type:Array
    },

})


const User = mongoose.model('User', userSchema)

module.exports = User