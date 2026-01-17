const authenticate = (req, res, next) => {
	const apiKey = req.headers["api-key"]
	if (apiKey && apiKey === process.env.API_KEY) {
		console.log("Authenticated!");
		next();
	} else {
		res.status(401).json({
			success: false,
			message: "Access denied!",
			description: "A valid api-key is expected",
		});
	}
};

export { authenticate };
