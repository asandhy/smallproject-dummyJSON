
const mongoose = require('mongoose');

const MONGO_USERNAME = 'asandhy2013';
const MONGO_PASSWORD = 'bZ0zMXZuFtPSJFeg';
const MONGO_CLUSTER_NAME = 'mycluster.rd43jsw.mongodb.net';
// const MONGO_DATABASE_NAME = 'dbTest';

// URL koneksi MongoDB Atlas
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER_NAME}/?retryWrites=true&w=majority`;

const connectDB = async () => {
    try{

		// Set INJECTION for MongoDB, reduce error string connection
		mongoose.set("strictQuery", false);
		
        // mongodb connection string
        // const con = await mongoose.connect(process.env.MONGO_URI, {
		 const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
		
    }
}

module.exports = connectDB


