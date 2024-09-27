import express from "express";
import { login, logout, register, updateProfile } from "../controllers/Usercontroller.js";
import isAuthenticated from "../middlewares/Authenticate.js";
// import { singleUpload } from "../middlewares/mutler.js";
 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;

