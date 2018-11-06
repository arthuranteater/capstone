const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String,
    deviceKey: String,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model('Profile', profileSchema)