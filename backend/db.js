const mongoose = require("mongoose")
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
            maxLength: 60,
            minLength: 6,
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

const accountSchema = new Schema({
    userId: { 
        type: ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("user", userSchema);
const Account = mongoose.model("account", accountSchema)

module.exports = {
    User,
    Account
}