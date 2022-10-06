import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'posts',
    //     required: true
    // }],
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    city: {
       type: String,
        required: true,
        default: 'Bishkek'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

}, {timestamps: true})

const User = mongoose.model('users', userSchema)

export {User}