export const getUsers = () =>
	new Promise((resolve, reject) =>
		setTimeout(() => reject(new Error("Database connection failed")), 500)
	);
