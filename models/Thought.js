/// REQUIRES ///
const { Schema, model } = require('mongoose');




/// CREATE NEW SCHEMAS ///

// reaction (subdocument)
const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


// thoughts
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

// create virtual property that gets number of reactions a thought has
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});




/// CREATE MODEL ///

const Thought = model('thought', thoughtSchema);







module.exports = Thought;