import "../styling/coach.css"

const Coach = ({coach}) => {

    return(
        <div className="coach">
            <img src={coach.img}/>
            <div>
                <p style={{margin: 0}}>Held by coach</p>
                <h2>{coach.name}</h2>
            </div>
            <p>{coach.description}</p>
        </div>
    )

}

export default Coach