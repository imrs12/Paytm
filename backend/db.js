const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/paytm")

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
        username: {
            type: String, 
            unique: true,
            trim: true,
            required: true,
            minLength: 3,
            maxLength: 20
        },
        password: {
            type: String,
            maxLength: 20,
            minLength: 6,
            trim: true,
            required: true
        },
        firstname: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 30,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 30,
            trim: true
        }
})

const User = mongoose.model("user", userSchema);

module.exports = {
    userModel
}