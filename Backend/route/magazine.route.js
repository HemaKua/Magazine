import express from 'express';
import { getMagazine } from '../controller/magazine.controller.js';

const router=express.Router()

router.get('/',getMagazine);

export default router;