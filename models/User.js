/// REQUIRES ///
const { Schema, model } = require('mongoose');




/// CREATE NEW SCHEMA ///

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought'
    }],
    friends: [{
        type: Schema.Type.ObjectId,
        ref: 'user'
    }],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

// create virtual property that gets number of friends user has
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});





/// CREATE MODEL ///

const User = model('user', userSchema);





module.exports = User;