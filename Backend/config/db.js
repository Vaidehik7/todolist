const mongoose = require('mongoose');

// MongoDB connection string
const url = 'mongodb://127.0.0.1:27017/todolist';

// Connect to MongoDB
async function connectDB() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Connected successfully to MongoDB with Mongoose');
    } catch (error) {
        console.error('❌ Mongoose connection failed:', error);
        process.exit(1); // Exit the app if unable to connect
    }
}

module.exports = connectDB;
