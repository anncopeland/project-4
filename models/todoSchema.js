
const Schema = require('mongoose').Schema;

const todoSchema = new Schema({
    text: { 
      type: String, 
      required: true 
    },
}, {
    timestamps: true
});
  
module.exports = todoSchema;