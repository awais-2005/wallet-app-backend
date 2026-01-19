import { User } from "../models/user.model.js";

export const registerUser = async (user) => await User.create(user);