import {Link }from "react-router-dom"

 export default function NavBar(){
    return(
<div id="nav">
    <Link className="link">Home</Link>
    <Link className="link" to="/admin">Admin</Link>
    <Link className="link" to="/">Booking</Link>
    <Link className="link">Contact Us</Link>
    <Link className="link">About Us</Link>
</div>
    )
}