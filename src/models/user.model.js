import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		avatar: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		fullName: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		refreshToken: {
			type: String,
			required: true,
			unique: true,
		},
		transactions: {
			type: String,
		}
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model("User", userSchema);
