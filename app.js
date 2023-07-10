import  express  from "express";
import dotenv from "dotenv";
import initDB from "./backend/config/db.js";
import userroutes from './backend/routes/userRoutes.js';
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


initDB()

app.get("/api", (req, res) => (
    res.send("Hello From node server")
));
app.use("/api/users", userroutes); 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})