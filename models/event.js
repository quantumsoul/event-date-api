const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
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
const Event = mongoose.model('Event', eventSchema)
module.exports = Event
