import "../styling/nav.css"
import "../styling/button.css"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-title">
                🧙‍♂️ Wisengard
            </div>
            <button className="button-card">
                <span>
                    Sign up
                </span>
            </button>
        </nav>
    )
}

export default Navbar