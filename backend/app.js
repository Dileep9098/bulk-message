// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import dotenv from "dotenv"

// dotenv.config()

// const app = express();

// app.use(cors());
// app.use(bodyParser.json()); // or just: app.use(express.json());

// import user from "./routes/userRoute.js"

// app.use("/api/v1",user)

// export default app;



import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path"
import user from "./routes/userRoute.js"; 
import sendMessage from "./routes/sendMessageRoute.js"; 


const __dirname=path.resolve()
dotenv.config();

const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, "/bulk-message/dist")));

// app.js ya server.js me sabse upar add karo
app.use((req, res, next) => {
    // Skip the ngrok warning page so Twilio can receive raw XML
    res.setHeader("ngrok-skip-browser-warning", "true");
    next();
  });
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));

  
app.use(cookieParser())
app.use(bodyParser.json()); // or use: app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use('/upload',express.static(path.join(__dirname,'upload')))

  
app.use("/api/v1", user); 
app.use("/api/v1", sendMessage); 


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "bulk-message", "dist", "index.html"));
});



export default app;
