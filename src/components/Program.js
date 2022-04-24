import "../styling/feature.css"
import Infobox from "./Infobox"
import { PopupButton } from '@typeform/embed-react'

const Program = () => {
    return (
        <div className="feature">
            <div className="feature-text">
                <div>
                    <h1 style={{textAlign: "center"}}>Program</h1>
                </div>
                <p>
                    una accademia esclusiva per gamer dove possono accedere a contenuti premium, coaching, review dei propri video e networking per un futuro nel mondo del gaming.
                </p>
            </div>
            <PopupButton id="kKo6RYeF" className="button-85 big">
                Apply
            </PopupButton>
            <div className="info-list">
                <Infobox
                    emoji="🏋️‍♂️"
                    title="Group Training"
                    text=" esclusiva per gamer dove possono accedere a contenuti premium, coaching, review dei propri video e networking per u"
                />
                <Infobox
                    emoji="🗓️"
                    title="weekly meetup"
                    text=" esclusiva per gamer dove possono accedere a contenuti premium, coaching, review dei propri video e networking per u"
                />
                <Infobox
                    emoji="🕹️"
                    title="Game breakdowns"
                    text=" esclusiva per gamer dove possono accedere a contenuti premium, coaching, review dei propri video e networking per u"
                />
                <Infobox
                    emoji="🏋️‍♂️"
                    title="Group Training"
                    text=" esclusiva per gamer dove possono accedere a contenuti premium, coaching, review dei propri video e networking per u"
                />
                <Infobox
                    emoji="🗓️"
                    title="weekly meetup"
                    text=" esclusiva per gamer dove possono accedere a contenuti premium, coaching, review dei propri video e networking per u"
                />
                <Infobox
                    emoji="🕹️"
                    title="Game breakdowns"
                    text=" esclusiva per gamer dove possono accedere a contenuti premium, coaching, review dei propri video e networking per u"
                />
            </div>
        </div>
    )
}

export default Program