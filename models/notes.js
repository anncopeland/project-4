
const Schema = require('mongoose').Schema;

const notesSchema = new Schema({
    name: { type: String, required: true },
    emoji: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  }, {
    timestamps: true
  });
  
  module.exports = notesSchema;