import { useParams } from "react-router-dom"
import Coach from "../components/Coach"
import Navbar from "../components/Navbar"
import "../styling/session.css"
import "../styling/FAQ.css"
import Bottombar from "../components/Bottombar"

const Session = () => {

    const { id } = useParams()

    const QAs = [
        {
            Q: "idk",
            A: "idk"
        },
        {
            Q: "idk",
            A: "idk"
        },
        {
            Q: "idk",
            A: "idk"
        },
    ] 

    return (
        <>
            <Navbar/>
            <div className="session-bg">
                <div className="session">
                    <h1>Wave Management live class</h1>
                    <div className="session-flex">
                        <div>
                            <p style={{lineHeight: 1.4}}>
                                Esports veterans who have competed against some of the greatest talent in their respective games and are recognized for their success on global competition stages. They have extensive coaching experience at the highest levels of play.
                            </p>
                        </div> 
                        <div>
                            <Coach/>
                            <button className="button-85" style={{margin: "2em 0"}}>Buy Now</button>
                            <p style={{textAlign: "center"}}>The session is going to be on the 6th of May</p>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", padding: "3vh"}}>FAQs</h1>
                        {QAs.map(qa => (
                            <div className="faq" key={qa.Q}>
                                <h2>{qa.Q}</h2>
                                <p>{qa.A}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Bottombar/>
        </>
    )

}

export default Session