const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoDB =
  "mongodb+srv://sugat:sugat@cluster0.y5zmrgq.mongodb.net/?retryWrites=true&w=majority";
const jsonParser=bodyParser.json()
const dataBase=mongoose.connect(mongoDB)
const app= express()
const Booking=require("./model")


app.post("/bookings",jsonParser,async(req,res)=>{
     const existingBooking= await Booking.findOne({email:req.body.email})
if(existingBooking){
   return res.status(400).send("Booking Exists")
}
    try {
    const newBooking=new Booking ({...req.body})
    await newBooking.save()
    res.status(200).send("Booking Confirmed")
    } catch (error) {
        res.status(400).send(error)
    }
   
})

app.get("/entries",jsonParser,async(req,res)=>{
    let bookings= await Booking.find()
       return res.status(200).send(bookings)
})



app.get("/",(req,res)=>{
    res.status(200).send("HII")
})

dataBase.then(()=>{
    app.listen(5000,()=>{
        console.log("Server Started and Connected to DataBase")
      })
}).catch((e)=>console.log(e))



