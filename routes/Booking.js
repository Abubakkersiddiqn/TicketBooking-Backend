import express from 'express';
import { bookingStatus, movieBooking, selectedSeat } from '../Controller/BookingController.js';

const router= express.Router();

router.post('/seatbooking',movieBooking )
router.get('/bookingStatus/:id',bookingStatus)
router.get('/selectedseat',selectedSeat)

export default router