
import { db } from '../db.js';

export const getAllMovie=(req,res)=>{
    const q="SELECT * FROM movie"
    db.query(q,(err,data)=>{
      if(err) return res.send(err);
      return res.send(data)
    })
}

export const addMovie=(req,res)=>{
    const q = "INSERT INTO movie(`name`,`poster`,`rating`,`summary`,`trailer`,`price`,`showTiming`) VALUES(?)"
const values =[
    req.body.name,
    req.body.poster,
    req.body.rating,
    req.body.summary,
    req.body.trailer,
    req.body.price,
    req.body.showTiming
]
db.query(q,[values],(err,data)=>{
    if(err) return res.json(err);
    return res.json('Movie created sucessfully')
})
}

export const getMovie=(req,res)=>{

const q="SELECT * FROM movie WHERE id = ?"

db.query(q,[req.params.id],(err,data)=>{
    if(err) return res.json(err)
    return res.status(200).json(data)
})
}
