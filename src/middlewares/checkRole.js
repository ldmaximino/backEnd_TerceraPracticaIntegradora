import { httpResponse } from "../utils/httpResponse.js";

export const checkRole = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "admin")
      return httpResponse.Forbidden(res, "This endpoint is only for administrators");
    else next();
  } catch (error) {
    next(error);
  }
};

export const checkRoleCarts = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "user")
      return httpResponse.Forbidden(res, "Only users with role='user' can add products to the cart");
    else next();
  } catch (error) {
    next(error);
  }
};