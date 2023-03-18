const mongoose = require('@database/mongo.js')

const Message = mongoose.model('messages', {
    user: String,
    message: String,
    visualized: Boolean
});


module.exports = Message;