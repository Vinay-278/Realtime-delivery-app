import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import Connect_db from "./config/db.js"
import authRoutes from './Routes/authRoutes.js'
import location from './Routes/locationRoutes.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
Connect_db();

app.get("/",(req,res)=>{
    res.send("Backend running ...");
});

app.use("/api",authRoutes)
app.use("/api",location)

const PORT= process.env.PORT || 3000;

// console.log("EMAIL:", process.env.MAIL_USER);
// console.log("PASSWORD:", process.env.MAIL_PASS);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})


