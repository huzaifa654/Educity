import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
export default function Navbar() {
    return (
        <nav className='container'>
            <img src={logo} alt="" className='Logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About US</li>
                <li>Campus</li>
                <li>Testimonilas</li>
                <li><button className='btn'> Contact us</button></li>
            </ul>
        </nav>
    )
}
