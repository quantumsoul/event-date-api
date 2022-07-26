const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const eventSchema = new mongoose.Schema({
    emailId:{
        type: String,
        req: true
    },
    clientId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
    type: {
      type: String,
      default: 'Sales',
    },
    SAL_TYPE:{
      type: String,
      trim: true
    },
})
const Event = mongoose.model('Event', salesSchema)
module.exports = Event
