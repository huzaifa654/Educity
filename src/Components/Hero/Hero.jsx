import React from 'react'
import "./Hero.css"
import arrow from '../../assets/arrow.png'

export default function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We Ensure Better Education For Better World</h1>
                <p>Our cutting-edge curriculum is desinged to empower students with the knowledge skills, and experince needed to excel in the dynamic field of education </p>
                <button className='btn'>Explore More <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}
