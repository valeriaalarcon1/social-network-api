/// REQUIRES ///
const { Schema, model } = require('mongoose');
const User = require('./User');




/// CREATE NEW SCHEMAS ///

// reaction (subdocument)
const reactionSchema = new Schema({
    reactionID: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});


// thoughts
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema],
});





/// CREATE A MODEL ///

const Thought = model('Thought', thoughtSchema);








module.exports = Thought;