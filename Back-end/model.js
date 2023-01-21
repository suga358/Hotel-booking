const mongoose=require("mongoose")

const bookingCollection="booking"

const Booking=mongoose.model(bookingCollection,{
    firstName:String ,
    lastName: String,
    phone: String,
    email: String,
    guest: String,
    adults: String,
    childrens: String,
    checkin: String,
    checkout: String,
    category: String,
})

module.exports= Booking 