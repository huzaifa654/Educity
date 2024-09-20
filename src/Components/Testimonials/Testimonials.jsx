import React, { useRef, useState } from 'react'
import "./Testimonials.css"
import nexticon from "../../assets/nexticon.png"
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
import backicon from "../../assets/backicon.png"
const Data = [
    {
        name: "Willam  Jackson1",
        city: "Edusity,USA",
        source: user1,
        description: "Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations"
    },
    {
        name: "Willam  Jackson2",
        city: "Edusity,USA",
        source: user2,
        description: "Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations"
    },
    {
        name: "Willam  Jackson3",
        city: "Edusity,USA",
        source: user3,
        description: "Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations"
    },
    {
        name: "Willam  Jackson4",
        city: "Edusity,USA",
        source: user4,
        description: "Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations"
    },
]


const UserInfo = ({ name, city, desc, source }) => {

    return (

        <li>
            <div className="slide">
                <div className="userinfo">
                    <img src={source} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <span>{city}</span>
                    </div>
                    <p>{desc}</p>
                </div>

            </div>
        </li>

    )
}


export default function Testimonials() {

    const slider = useRef()
    let tx = 0;
    console.log("tx-------------", tx)
    const slideForward = () => {
        console.log("slideForward===", tx)
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%);`

    }
    const slideBackward = () => {

    }
    return (
        <div className='testimonials container'>
            <img src={nexticon} alt="" className='next-btn' onClick={slideForward} />
            <img src={backicon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    {Data.map((key, value) =>
                        <UserInfo name={key?.name} city={key?.city} desc={key?.description} source={key?.source} />
                    )}
                </ul>
            </div>
        </div>
    )
}
