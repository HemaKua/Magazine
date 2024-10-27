import express from 'express';
import { signup,login } from '../controller/user.controller.js';

const router = express.Router(); // Make sure it's express.Router()

router.post("/signup", signup);
router.post("/login", login);

export default router;
