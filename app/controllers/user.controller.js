const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  User.find({  })
    .exec((err, users) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!users) {
        return res.status(404).send({ message: "User Not found." });
      }

      

      res.status(200).send({
        message:"Auth header api response for user",
        users
      });
    });
};
