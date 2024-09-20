import React, { useState } from 'react'
import "./ContactUs.css"
import msg from "../../assets/msg.png"
import location from "../../assets/location.png"
import phoneicon from "../../assets/phoneicon.png"
import whitearrow from "../../assets/whitearrow.png"


export default function ContactUs() {
    const [Loading, setLoading] = useState("")
    const HandleSubmit = () => {
        setLoading("Sending...")
        setTimeout(() => {
            setLoading("Email Sent Successfully")
        }, 2000);
    }
    return (
        <div className='contact container'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
                <ul>
                    <li><img src={msg} alt="" className='info' />huzaifa@gmail.com</li>
                    <li><img src={phoneicon} alt="" className='info' /> +1 5452331231</li>
                    <li><img src={location} alt="" className='info' /> Massachusetts Ave, Cambridge<br /> MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form >
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                    <label>Write your messgae here</label>
                    <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn' onClick={HandleSubmit}>Submit Now <img src={whitearrow} alt="" /></button>
                </form>
                <span>{Loading}</span>
            </div>
        </div>
    )
}
