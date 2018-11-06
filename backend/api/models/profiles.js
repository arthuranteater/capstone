const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    petName: String,
    activateKey: Number,
    petName2: String,
    activateKey2: Number
})

module.exports = mongoose.model('Profile', profileSchema)