const healthCheck = (req, res) => {
	const uptimeSeconds = Math.floor(process.uptime()) + 's';
	res.status(200).json({
		uptimeSeconds,
		envirnoment: "Development",
	});
};

export { healthCheck };
