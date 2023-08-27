import mongoose from 'mongoose';

// function to connect to the database
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    // on successful connection
    connection.on('connected', () => {
      console.log('Mongo db conneceted');
    });

    // on error
    connection.on('error', (error) => {
      console.log('Unable to connect to mongo db', error);
      process.exit();
    });
  } catch (error) {
    console.log('soomething went wrong while connecting to db');
    console.log(error);
  }
}

export default connect;
