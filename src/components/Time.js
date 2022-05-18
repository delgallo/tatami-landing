import { useState } from "react"
import "../styling/time.css"

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

const TimeWidget = ({time}) => {

    return (
        <div className="time-box">
            <h2>{time.getDate()}</h2>
            <span>{months[time.getMonth()]}</span>
            <div className="vertical-line"/>
            <span>{time.getHours()}:{time.getMinutes()}</span>
        </div>
    )
}

export default TimeWidget