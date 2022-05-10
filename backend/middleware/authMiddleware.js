const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header  --- token 'bearer token' şeklinde geliyor bu yüzden bearer dan sonra ki boşluktan ayırıp token ı alıyoruz
      token = req.headers.authorization.split(" ")[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get user from the token -- token içinde user id var, o id ile user ı bulup req.user a atıyoruz.
      req.user = await User.findById(decoded.id).select("-password"); //password ü atmak istemiyoruz o yüzden çıkıyor.

      next();
    } catch (error) {
      console.log(error);
      res.status(401); // 401 - not authorized
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
