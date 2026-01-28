import Cloudinary from "./cloudinary.config";

export const uploadImage = async (imagePath) => {
	// https://res.cloudinary.com/dh49op3h5/image/upload/v1769597896/m95pyv8j9k2rt7jrzaj1.jpg
	try {
		const res = await Cloudinary.uploader.upload(imagePath);
		return res.url;
	} catch (err) {
		console.log("ERR: ", err);
	}
};
