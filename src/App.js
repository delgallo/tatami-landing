import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import "./styling/base.css"
import chad from "./assets/chad.png"

function App() {
  return (
    <>
      <Navbar/>
      <div className="head">
        <h1>
          SUPER CATCHY SLOGAN!
        </h1>
        <p>
          Learn from the industry's best coaches at Gamer Sensei, the world's premier esports coaching platform. 
          Start your journey and unlock your achievements.
        </p>
        <button className="button-card center-button">
          <span>
            Call to Action
          </span>
        </button>
      </div>

      <Feature
        img={chad}
        title="Become a gaming chad"
        text="We are building the tools for improving your gameplay like never before. It will be like a gym. but digital and for gamers. ah, did I already mention it’s even cheaper?"
      />
    </>
  );
}

export default App;
