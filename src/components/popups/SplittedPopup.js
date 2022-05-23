const SplittedPopup = ({ children }) => {
	return children ? (
		<div className="popup">
			<div className="glass">{children}</div>
		</div>
	) : (
		""
	)
}

export default SplittedPopup
