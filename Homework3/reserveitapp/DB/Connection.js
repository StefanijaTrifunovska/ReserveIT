const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:AtlasAdmin1@cluster0.r3c5u.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async() => {

    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('db connected ...!!');
};


module.exports = connectDB;