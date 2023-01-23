import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
export const register =(req,res)=>{
//checking user exist 

const q="SELECT * FROM users WHERE username = ? OR email = ?"


db.query(q,[ req.body.username,req.body.email],(err,data)=>{
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("User is already exist")
    const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, salt);
const q= 'INSERT INTO users (`username`,`email`, `password`) VALUES(?)';
const newUser=[
  
    req.body.username,
    req.body.email,
    hash
];
db.query(q,[newUser],(err,data)=>{
    if(err) return res.json(err);
    return res.status(200).json("created successfully")
})
})

}
export const login =(req,res)=>{
    //checking user
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      //Check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");
  
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      console.log(token,'tokennn');
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
}
export const logout =(req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
}

// client id = 573781333069-3v8a1qmse5624qg5letmotknpmvoeog4.apps.googleusercontent.com;
//secret = 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