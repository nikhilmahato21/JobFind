import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";

import { comparePassword, hashPassword } from "../utils/passwordHash.js";
import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customError.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "registered success fully!" });
};
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthenticatedError("invalid credentials");
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect) throw new UnauthenticatedError("password");
  res.send("login");
};
