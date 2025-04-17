// import app from "./app.js"; // 👈 Make sure to include the `.js` extension if using ESM
// import connectDB from "./database/database.js";
// import ngrok from "ngrok"
// const PORT = 5001;

// connectDB()

// app.listen(PORT, async() => {
//     console.log(`Server is working on http://localhost:${PORT}`);
//     const url = await ngrok.connect(PORT);
//     console.log(`Ngrok URL: ${url}`); 
// });


import app from "./app.js";  // Ensure the file is being imported correctly with .js extension
import connectDB from "./database/database.js";

const PORT = 5000; // Port number

// Connect to database
connectDB();

app.listen(PORT, async () => {
    console.log(`Server is working on http://localhost:${PORT}`);

    // Ngrok Tunnel
    // const url = await ngrok.connect(PORT); // Expose the server through ngrok
    // console.log(`Ngrok URL: ${url}`);  // Print ngrok public URL to the console

    // Optional: You can use the ngrok URL for any external service like Twilio, etc.
});
