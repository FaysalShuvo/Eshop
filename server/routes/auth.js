const router = require("express").Router();
const User = require("../modals/User");
const CryptoJS = require("crypto-js");

// register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_PASS
    ).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(201).send(saveUser);
  } catch (err) {
    console.log("err" + err);
    res.status(500).send({
      message: "something went wrong",
    });
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json({ message: "wrong credentials" });

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SEC_PASS
    );
    const passwrd = hashedPassword.toString(CryptoJS.enc.Utf8);
    passwrd !== req.body.password &&
      res.status(401).json({ message: "wrong credentials" });
    const { password, ...other } = user._doc;
    res.status(200).json({ message: "successful", data: other });
  } catch (err) {
    console.log("err" + err);
    res.status(500).send({
      message: "something went wrong",
    });
  }
});

module.exports = router;
