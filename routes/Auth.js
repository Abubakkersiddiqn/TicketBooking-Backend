import express from 'express';
import { login, logout, register } from '../Controller/AuthController.js';

const router= express.Router();
import passport from 'passport'

const CLIENT_URL = "https://transcendent-elf-ed3c89.netlify.app/";


router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
 
  
    req.logout();
    res.redirect("https://transcendent-elf-ed3c89.netlify.app/login");


  

  
});

router.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);
export default router