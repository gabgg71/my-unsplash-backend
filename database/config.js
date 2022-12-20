const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.DB_CNN);
    } catch (error) {
        throw new Error('Error running db');
    }
}
module.exports = {
    dbConnection
}