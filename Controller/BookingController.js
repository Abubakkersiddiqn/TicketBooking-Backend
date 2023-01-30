import { db } from "../db.js";


export const movieBooking =(req,res)=>{
    
    const q="INSERT INTO booking(`moviename`,`selectedseat`,`noofseat`,`totalprice`,`mid`,`uid`,`showTime`) VALUES(?)";

   const values=[
        req.body.moviename,
        req.body.selectedseat,
        req.body.noofseat,
        req.body.totalprice,
        
        req.body.mid,
        req.body.uid,
       
        req.body.showTime
    ]

    db.query(q,[values,req.params.id],(err,data)=>{
        if(err) return res.json(err);
        
        return res.json("Booking Confirm");
    })

  
}
export const bookingStatus =(req,res)=>{
   const q="SELECT `username`, `moviename` ,`selectedseat`, `noofseat`, `totalprice`,`showTime` FROM users u JOIN booking b ON u.id=b.uid WHERE u.id = ?"

    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const selectedSeat=(req,res)=>{
    const q="SELECT `mid`,`selectedseat` FROM booking "

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
         return res.status(200).json(data)

    })
}
