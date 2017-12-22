const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
  ownerId: String,
  receptionId: String,
  type: String,
  command: String,
  condition: {
    operation: String,
    value: Number
  },
  count: {
    type: Number,
    default: 0
  },
  actionType: String,
  payload: JSON,
  interval: Number,
  provider: String
}, {timestamps: true})

module.exports = mongoose.model('notification', NotificationSchema)
