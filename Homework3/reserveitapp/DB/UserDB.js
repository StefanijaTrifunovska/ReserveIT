const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    email: {
        type: String
    },
    MobilePhone: {
        type: String
    },
    password: {
        type: String
    }

}, { timestamps: true })

const User = mongoose.model('User', UserSchema);
module.exports = User