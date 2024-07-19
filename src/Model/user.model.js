const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lstName: {
        type: String
    },
    gender: {
        type: String,
        enum:['Male' , 'Female']
    },
    email: {
        type: String,
        required: true,
        unique: trusted,
    },
    isdelete: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{
    versionkey: false,
    timestamps: true
});

module.exports = mongoose.model('Users' , userSchema); 