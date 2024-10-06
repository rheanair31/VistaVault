import express from 'express';
import { signup, signin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup); // For signing up
router.post('/signin', signin);  // For signing in

export default router;
