import jwt from "jsonwebtoken";

export const currentUser = (req, res, next) => {
   console.log( req.session);

  if (!req.session || !req.session.jwt) {
   return next(); //   pass    -->  auth -guard
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY || "my-key"
    );

    req.currentUser = payload;
  } catch (err) {}

  next();
};
