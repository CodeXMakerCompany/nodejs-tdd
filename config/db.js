require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`connected`);
    } catch (error) {
       console.warn('Error connecting to db', error.message) 
    }
}

module.exports = { connect };