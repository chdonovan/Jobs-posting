const mongoose = require('mongoose');
const {Schema} = mongoose;
const dateFormat = require('../utils/dateFormat');

const ResponseSchema = new Schema(
    {
        
        responseId: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId()
        },
        responseText: {
        type:String,
        required: true,
        maxtLength: 280
        },
        username: {
        type: String,
        required: true
        },
        createdAt:{
        type: Date,
        default: Date.now,
        get: (createdAtVal)=> dateFormat(createdAtval)
        },
        responses: [ResponseSchema]

        
    }
)

