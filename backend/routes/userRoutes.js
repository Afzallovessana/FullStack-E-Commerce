import  express  from "express";
import { registerUser , loginUser } from "../controllers/userController.js";


const router = express.Router();

router.route("/register/p").post(registerUser);

router.route("/login/s").post(loginUser);





export default router;