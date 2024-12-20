const express = require("express");
const { Signups, Login, GetUser } = require("../controllers/signupController");
const verifyToken = require("../middlewares/VerifyToken");
const { collegePosts } = require("../controllers/AddpostController");

const router = express.Router();

router.post("/signup", Signups);
router.post("/login", Login);
router.get("/getuser", verifyToken, GetUser);
router.post("/addPost", verifyToken, collegePosts);

module.exports = router;
