import multer from "multer";
import fs from "fs"

const uploadDir = "uploads"

if(!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + "_" + file.originalname;
        cb(null, uniqueFileName);
    }
});

const upload = multer({ storage });

export default upload;