import "../styling/coach.css"

const Coach = () => {

    const coach = {
        name: "Arcurath",
        img: "https://static.metafy.gg/cdn-cgi/image/width=184,height=184,fit=crop,quality=100,sharpen=1,format=webp/uploads/store/account/95e4da9e-077a-4ec0-b1cc-aad80b92f3e3/avatar/a8fea9aa0d40d2bbeeb29df3569fb5b6.png",
        game: "League of Legends",
        link: "https://arcurath.carrd.co/",
        description: `Hello there, I'm Arcurath - I coach all roles and elo ranges. I have been playing League of Legends for 7 years. My peak is Master 200lp in Season 11.

        I have 2 years experience playing and coaching in ERLs. I am currently the Coach for XAL Esports in NLC Div 4 and had a 18-1 Split resulting in promotion into Div 3. With all of these ERL teams, I coached rookie players who have gone on to play higher Divisions, achieving success.
        
        If you are interested in looking at some previous sessions I've done, you can look at my YouTube here - https://www.youtube.com/channel/UCysfTw4JXGgg0cyJG-8ef4A
        
        You can join my Discord to see countless reviews from previous students here - https://discord.gg/RVcbPThj7W`
    }


    return (
        <div className="coach-card">
            <div>
                <img src={coach.img} />
                <div>
                    <h3 style={{marginBottom: "0.5em"}}>by <span onClick={() => window.open(coach.link)} style={{textDecoration: "underline", cursor: "pointer", fontSize: "x-large"}}>{coach.name}</span></h3>
                    <span>{coach.game} coach</span>
                </div>
            </div>
        </div>
    )

}

export default Coach