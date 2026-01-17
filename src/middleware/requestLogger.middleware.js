import { getTimeStamp } from "../utils/getTime.js";

const requestLogger = (req, res, next) => {
    console.log(req.method, req.originalUrl, getTimeStamp());

    next();
};

export { requestLogger };