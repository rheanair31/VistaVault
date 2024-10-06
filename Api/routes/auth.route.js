import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup); // Make sure this matches your Insomnia request

export default router;
