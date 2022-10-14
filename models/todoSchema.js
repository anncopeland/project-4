const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: { 
      type: String, 
      required: true 
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
}, {
    timestamps: true
});
  
module.exports = mongoose.model("Todo", todoSchema);