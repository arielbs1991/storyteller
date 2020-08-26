const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Username Required'
    },
    password: {
        type: String,
        trim: true,
        required: 'Please enter a password',
        validate: [({ length }) => length >= 6, 'Password needs to be at least 6 characters']
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    meta: {
        storiesCreated: Number,
        contributions: Number,
        favorited: Number
    }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;