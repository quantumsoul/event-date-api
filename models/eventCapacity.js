const mongoose = require('mongoose')
const eventCapacitySchema = new mongoose.Schema({
    eventTitle:{
        type: String,
        trim:true
    },
    location: {
      type: String
    },
    allDay: {
      type: Boolean,
      default: false
    },
    capacity:{
      type: String,
      trim:true
    },
    start:{
      type: Date
    },
    end:{
      type: Date
    },
    eventDescription:{
      type: String,
      trim: true
    }
})
const EventCapacity = mongoose.model('EventCapacity', eventCapacitySchema)
module.exports = EventCapacity