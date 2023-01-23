

import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from "passport"
import { db } from './db.js';

const User = db.users
const passportStrategy = passport.use(
	new GoogleStrategy(
		{
			clientID: "573781333069-3v8a1qmse5624qg5letmotknpmvoeog4.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "http://localhost:8800/api/auth/google/callback",
			scope: ["profile", "email"],
		},
		 function (accessToken, refreshToken, profile, done) {
            
            const  q="INSERT INTO users (`username`,`email`,id) VALUES(?,?,?)"
             const values ={
               
                
                username: profile.displayName,
                email: profile.emails[0].value,
                
                id: profile.id,
                
             }
             
             db.query(q,[values.username,values.email,values.id],(err,data)=>{
               //  if(err)  return done(err);
                
                
               if(err)
               {
         
                 if(err.code == 'ER_DUP_ENTRY' || err.errno == 1062)
                 {
                    console.log(values.id)
                 }
                 else{
                  if(err)  return done(err);
                
                 }
         
               }else{
                  return done(data);
               }
             })
           
              done(null, profile);
        }
    ));
		
	

    passport.serializeUser(function (user, done) {
        return done(null, user);
      });
      passport.deserializeUser(function (user, done) {
        return done(null, user);
      });

export default passportStrategy