import { getTimeStamp } from "../utils/getTime.util.js";

const requestLogger = (req, res, next) => {
    console.log("Method: ", req.method);
    console.log("Url: ", req.originalUrl);
    console.log("TimeStamp: ", getTimeStamp());

    next();
};

export { requestLogger };