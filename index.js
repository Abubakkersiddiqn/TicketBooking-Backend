import express from 'express';

import cors from 'cors';
import MovieRoute from './routes/Movie.js'
import AuthRoute from './routes/Auth.js';
import BookingRoute from './routes/Booking.js'
import UserRoute from './routes/User.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import PaymentRoute from './routes/PaymentRoute.js';
import passportStrategy from './passport.js'
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';
const app = express();
const port = 8800
const keys =process.env.keys

dotenv.config()
const corsOptions = {
    
    origin: [
      "https://transcendent-elf-ed3c89.netlify.app/",
     
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  };
  

app.use(express.json());
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(
	cookieSession({
		name: "session",
		keys: ['abu'],
		maxAge: 24 * 60 * 60 * 100,
  
	})
);
app.use(passport.initialize());
app.use(passport.session());


app.get('/',(req,res)=>{
 res.send("Hello World")
})

app.use('/api/movie',MovieRoute)
app.use('/api/booking',BookingRoute);
app.use('/api/user',UserRoute);
app.use('/api/auth',AuthRoute);
app.use('/api/payment',PaymentRoute);

app.listen(port,()=>{
    console.log("Listening on port")
})
