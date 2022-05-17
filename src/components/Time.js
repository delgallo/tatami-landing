import "../styling/time.css"

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

const TimeWidget = ({time}) => {

    let startTime = new Date(time)
	startTime = new Date( startTime.getTime() + ( startTime.getTimezoneOffset() * 60000))

    return (
        <div className="time-box">
            <h2>{startTime.getDate()}</h2>
            <span>{months[startTime.getMonth()]}</span>
            <div className="vertical-line"/>
            <span>{startTime.getHours()}:{startTime.getMinutes()}</span>
        </div>
    )
}

export default TimeWidget