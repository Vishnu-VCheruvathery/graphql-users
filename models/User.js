const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        unique: true
    },
    createdAt: String
})

module.exports = model('User', userSchema)
