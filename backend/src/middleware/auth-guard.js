import { NotAuthorizedError } from "../error/not-authorized-error.js";

export const authGuard = (
      req,
      res,
      next
) => {
  
  if (!req.currentUser) {
     return  next(  new NotAuthorizedError())
  }

  next();
};
