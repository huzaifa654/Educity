import React from 'react'
import "./VideoPlayer.css"
import video from "../../assets/students.mp4"
export default function VideoPlayer({ setPlay, Play }) {
    return (
        <div className={Play ? "videoPlayer" : "hide"} onClick={() => setPlay(false)}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}
