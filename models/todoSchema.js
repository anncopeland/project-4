const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
    },
    text: { 
      type: String, 
      required: true, 
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
}, {
    timestamps: true
});
  
module.exports = mongoose.model("Todo", todoSchema);