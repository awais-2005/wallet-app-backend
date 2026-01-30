import { User } from "../models/user.model.js";

export const saveAvatar = async (email, url) => {
	const user = await User.findOne({ email });
	user.avatar = url;
	await user.save();
};

export const saveTransactionsList = async (email, unsaved) => {
	
	const user = await User.findOne({ email });
	let saved = user.transactions ? JSON.parse(user.transactions) : [];

	for (let key in unsaved) {
		if(saved[key]) {
			saved[key] = [...unsaved[key], ...saved[key]];
		} else {
			saved[key] = unsaved[key];
		}
	}
	
	user.transactions = JSON.stringify(saved);
	user.save();
};
