import { Cloudinary } from "./cloudinary.config.js";
import fs from "fs";

export const uploadImage = async (imagePath) => {
	try {
		const res = await Cloudinary.uploader.upload(imagePath);
		deleteImage(imagePath);
		return res.url;
	} catch (err) {
		deleteImage(imagePath);
		console.log("ERR: ", err);
	}
};

function deleteImage(imagePath) {
	fs.unlink(imagePath, (err) => {
		if(err) {
			console.log(`Could not delete file at ${imagePath}`, err);
		}
	});
}
