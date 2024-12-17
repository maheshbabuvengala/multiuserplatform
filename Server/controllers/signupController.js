const Signup = require("../model/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Secret = "Mahi@123";

const Signups = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const sign = await Signup.findOne({ email: email });

    const hashpassword = await bcrypt.hash(password, 10);

    if (sign) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const user = await Signup.create({
        name,
        email,
        password: hashpassword,
      });

      if (user) {
        res.status(200).json({ message: "User registered successfully" });
      } else {
        res.status(400).json({ message: "Error while user registering" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const log = await Signup.findOne({ email: email });
    if (!log || !(await bcrypt.compare(password, log.password))) {
      res.status(400).json({ message: "Invalid email or password" });
    } else {
      const token = await jwt.sign({ userId: log._id }, Secret, {
        expiresIn: "30h",
      });
      res.status(200).json({ message: "Login successful", token });
    }

    // if (log) {
    //   res.status(200).json({ message: "User Login successful" });
    // } else {
    //   res.status(400).json({ message: "User not found" });
    // }
  } catch (error) {
    console.log(error);
  }
};

const GetUser = async (req, res) => {
  try {
    const Verifieduser = await Signup.findById(req.UserId);
    if (!Verifieduser) {
      res.status(400).json({ message: "User not found" });
    } else {
      res.status(200).json(Verifieduser);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Signups, Login, GetUser };
