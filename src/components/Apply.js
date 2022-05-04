import { PopupButton } from "@typeform/embed-react"

const Apply = () => {

    const queryParams = new URLSearchParams(window.location.search)

    return(
        <div onClick={() => window.gtag('event', 'click_apply')}>
        	<PopupButton id={`kKo6RYeF#referral=${queryParams.get('r')}&hash=${Math.floor(Math.random() * 1000000)}`} className="button-85 b-header">
				Apply
			</PopupButton>
        </div>
    )
}

export default Apply