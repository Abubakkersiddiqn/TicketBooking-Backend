import express from 'express';
import { payment } from '../Controller/Payment.js';

const router= express.Router();

router.post('/',payment)

export default router