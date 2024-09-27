import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import userRoute from "./routes/Userroute.js";
import companyRoute from "./routes/Companyroute.js";
import jobRoute from "./routes/Jobroute.js";
import applicationRoute from "./routes/Applicationroute.js";

dotenv.config({});

const app = express();
app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"Suraj",
        success:true
    })
})
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// // api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})