import { Link } from "react-router-dom"

const Apply = () => {

    const queryParams = new URLSearchParams(window.location.search)

    return(
        <Link to={{pathname: "/wave-management"}}>
            <button onClick={() => window.gtag('event', 'click_apply')} className="button-85 b-header">
                    Join class
            </button>
        </Link>
    )
}

export default Apply