import { PopupButton } from "@typeform/embed-react"

const Apply = () => {

    const queryParams = new URLSearchParams(window.location.search)
    console.log("####")
    console.log(Math.floor(Math.random() * 1000000))

    return(
        <>
        	<PopupButton id={`kKo6RYeF#referral=${queryParams.get('r')}&hash=${Math.floor(Math.random() * 1000000)}`} className="button-85">
				Apply
			</PopupButton>
        </>
    )
}

export default Apply