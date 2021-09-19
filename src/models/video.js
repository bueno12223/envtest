import mongoose from 'mongoose'
import moment from 'moment'
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  key: {
    type: Number,
    required: true,
    unique: true
  },
  likes: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 0
  },
  order: Number,
  profesor_id: String,
  comments: [{
    userID: String,
    content: String
  }],
  updated: {
    type: Date,
    default: moment()
  }
}, { Timestamp: true })

export default mongoose.model('videos', videoSchema)
