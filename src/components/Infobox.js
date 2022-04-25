

const Infobox = ({emoji, title, text}) => {
    return (
        <div>
            <h1 style={{ margin: 0, fontSize: "3em"}}>{emoji}</h1>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Infobox