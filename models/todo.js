
import mongoose from "mongoose";

const Schema = require('mongoose').Schema;

const todoSchema = new Schema({
    title: { type: String, required: true },
    content: String
  }, {
    timestamps: true
  });
  
  module.exports = todoSchema;
  