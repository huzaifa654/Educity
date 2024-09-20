import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
export default function Navbar() {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <nav className={`container ${sticky ? `dark-nav` : ''}`}>
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
