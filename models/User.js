/// REQUIRES ///
const { Schema, model } = require('mongoose');
const thought = require('./Thought');




/// CREATE NEW SCHEMA ///

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Type.ObjectId, ref: 'User' }],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

// create virtual property that gets number of friends user has
userSchema.virtual('getFriends').get(function() {
    return this.friends.length;
});





/// CREATE A MODEL ///

const User = model('User', userSchema);






module.exports = User;