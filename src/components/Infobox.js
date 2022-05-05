

const Infobox = ({emoji, title, text, comingSoon=false}) => {
    return (
        <div>
            <div>
                <h1 style={{ margin: 0, fontSize: "3em"}}>{emoji}</h1>
                {comingSoon && <div className="coming-soon">Coming Soon</div>}
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Infobox