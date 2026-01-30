import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";
import { authorization } from "../middleware/authorization.middleware.js";

const transactionsRoute = Router();

transactionsRoute.post(
	"/saveList",
	authorization,
	asyncHandler((req, res) => {
		if (req.body.transactions) {
			let list;
			try {
				list = JSON.parse(req.body.transactions);
				// saveTransactionsList(list);
				res.status(200).json({
					statusCode: 200,
					message: "Transactions are saved successfully.",
				});
			} catch (err) {
				console.log(err);
				throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Please pass a valid JSON string");
			}
		} else {
			throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Transactions are not found in request.");
		}
	})
);
