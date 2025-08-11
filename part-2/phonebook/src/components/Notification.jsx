const Notification = ({ type, message }) => {
	if (message === null) {
		return null;
	}

	const color = type === "error" ? "red" : "green";

	return (
		<div className="notification" style={{ color }}>
			{message}
		</div>
	);
};

export default Notification;
