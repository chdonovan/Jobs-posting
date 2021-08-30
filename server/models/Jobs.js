const mongoose = require('mongoose');

//const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      minLength: 1,
      maxLength: 300,
    },
    price: {
      type: String,
      require: true,
    },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   red: 'Category',
    //   required: true,
    // },
    location: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: createdAtVal => dateFormat(createdAtval),
    // },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// jobsSchema.virtual('responseCount').get(function(){
//     return this.responses.length;
// })
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
