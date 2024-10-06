import express from 'express';
import {test} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

// Export the router as the default export
export default router;
