const mongoose = require('mongoose');

let RegisterSchema = new mongoose.Schema({
    typeOfEntry: {
        type: String, 
        enum: ["episode", " day-to-day event", "intrusive thought"], 
        required: true
    }, 
    title: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now()},
    description: {
        type: String
    },
    emotions: {
        type: String, 
        enum: ["anger", "calm", "sadness", "joy", "shame", "anxiety", "fatigue", "surprise", "fear", "contempt"], 
        required: true
    },
    intensityOfEmotion: {
        type: Number, 
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
        owner: {type: Schema.Types.ObjectId, ref: 'user'
    }    
})

let registerModel = mongoose.model('register', RegisterSchema)

module.exports = registerModel;