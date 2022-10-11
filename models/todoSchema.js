

const Schema = require('mongoose').Schema;

const todoSchema = new Schema({
    name: { type: String, required: true },
    emoji: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  }, {
    timestamps: true
  });
  
  module.exports = todoSchema;
  