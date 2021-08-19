const mongoose = require('mongoose');

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
    }
});

const Jobs = mongoose.model('job', jobsSchema);

module.exports = Jobs;