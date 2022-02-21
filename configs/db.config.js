const mongoose = require('mongoose'); 
//mongodb://localhost:27017/blogapp
const getDbUri = () => {
    return `mongodb+srv://simmy:Sim12345@cluster0.dcsyr.mongodb.net/blogapp`;
}

const URI = getDbUri();

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open');
    console.log(getDbUri());
});
// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${JSON.stringify(err)}`);
    process.exit(1);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', (err) => {
    console.log('Mongoose default connection disconnected');
    process.exit(1);
});
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
module.exports = mongoose;