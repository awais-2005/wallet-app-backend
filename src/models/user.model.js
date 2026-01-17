import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Please enter email."],
			unique: true,
			lowercase: true,
			trim: true,
		},
		fullname: {
			type: String,
			required: true,
			trim: true,
		},
        avatar: {
            type: String, //Cloudinary Url
        },
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model("User", userSchema);
