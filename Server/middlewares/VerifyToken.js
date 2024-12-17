const User = require("../model/signup");
const jwt = require("jsonwebtoken");

const Secret = "Mahi@123";

const verifyToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.status(400).json({ message: "Invalid token or token is required" });
  }
  try {
    const decoded = jwt.verify(token, Secret);
    const UserToken = await User.findById(decoded.userId);

    if (!UserToken) {
      res.status(400).json({ message: "User token not found" });
    }
    req.UserId = UserToken._id;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyToken;
