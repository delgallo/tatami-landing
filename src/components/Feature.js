import "../styling/feature.css"

const Feature = ({img, title, text}) => {
    return (
        <div className="feature">
            <img src={img} alt="chad"/>
            <div className="feature-text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature