export const getUsers = (req, res) => {
	res.status(200).json({
		users: ["Awais", "Ali", "Maaz"],
	});
};
