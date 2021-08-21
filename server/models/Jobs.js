const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const {Schema } = mongoose;

const jobsSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    price: {
        type: String,
        require: true,
    },
     category: {
        type: Schema.Types.ObjectId,
        red: 'Category',
        required: true
    },
    location: {
        address: String
    },
    createAt:{
        type: Date,
        default: Date.now,
        get: (createdAtVal)=> dateFormat(createdAtval)
    },
    
});

const Jobs = mongoose.model('job', jobsSchema);

module.exports = Jobs;
