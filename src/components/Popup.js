import "../styling/popup.css"

const Popup = props => {
    return(
        <div className="popup">
            {props.children}
        </div>
    )
}