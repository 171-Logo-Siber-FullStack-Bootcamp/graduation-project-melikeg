const { response } = require("express");
const db = require("../config/database");

exports.signUp = async (req, res) => {
  const { email, fullname, password, role } = req.body;
  if (role == "seller") {
    try {
      const { rows } = await db.query(
        "INSERT INTO sellers (email, fullname, password) VALUES ($1, $2, crypt($3, gen_salt('bf')))",
        [email, fullname, password]
      );
      res.status(200).send({
        message: "Seller added successfully!",
        body: {
          user: { email, fullname, password },
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "An error has ocurred",
        error,
      });
    }
  } else {
    try {
      const { rows } = await db.query(
        "INSERT INTO users (email, fullname, password) VALUES ($1, $2, crypt($3, gen_salt('bf')))",
        [email, fullname, password]
      );
      res.status(200).send({
        message: "User added successfully!",
        body: {
          user: { email, fullname, password },
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "An error has ocurred",
        error,
      });
    }
  }
};

exports.signIn = async (req, res) => {
  const { email, password, role } = req.body;
  if (role == "seller") {
    try {
      const { rows } = await db.query(
        "SELECT * FROM sellers WHERE email = $1 AND password = crypt($2, password)",
        [email, password]
      );
      if ((rows.length = 0)) {
        res.status(404).json({ message: "Seller does not exist." });
      }

      return res.status(200).json({ message: "Authentication succsessful." });
    } catch (error) {
      res.status(500).json({
        message: "An error has ocured",
        error,
      });
    }
  } else {
    try {
      const { rows } = await db.query(
        "SELECT * FROM users WHERE email = $1 AND password = crypt($2, password)",
        [email, password]
      );
      if ((rows.length = 0)) {
        res.status(404).json({ message: "User does not exist." });
      }

      return res.status(200).json({ message: "Authentication succsessful." });
    } catch (error) {
      res.status(500).json({
        message: "An error has ocured",
        error,
      });
    }
  }
};
