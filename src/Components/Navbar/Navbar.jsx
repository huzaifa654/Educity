import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { Link } from 'react-scroll'
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
                <li><Link to="hero" smooth={true} offset={0} duration={500} >Home</Link></li>
                <li><Link to="Programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to="About" smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonilas</Link></li>
                <li><Link className="btn" to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            </ul>
        </nav>
    )
}
