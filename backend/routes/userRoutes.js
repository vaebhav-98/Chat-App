import express from 'express';
import { registerUser } from '../controllers/userControllers.js';


export const router = express.Router();

router.route("/").post(registerUser);
