import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;



// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DB_URL); // Simply connect without the deprecated options

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     process.exit(1); // Exit with failure
//   }
// };

// export default connectDB;



// "scripts": {
//   "dev": "nodemon backend/server.js",
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "build": "npm install && npm install --prefix bulk-message && npm run build --prefix bulk-message",
//   "start": "node backend/server.js"
// },