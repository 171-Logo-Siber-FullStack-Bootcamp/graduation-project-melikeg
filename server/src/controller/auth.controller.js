const { response } = require("express");
const db = require("../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { email, fullname, password, role } = req.body;
  if (role == "seller") {
    try {
      const data = await db.query(`SELECT * FROM sellers WHERE email=$1;`, [
        email,
      ]); //Checking if user already exists
      const arr = data.rows;
      if (arr.length != 0) {
        return res.status(400).json({
          error: "Email already there, No need to register again.",
        });
      } else {
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
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Database error while registring seller!", //Database connection error
      });
    }
  } else {
    try {
      const data = await db.query(`SELECT * FROM users WHERE email=$1;`, [
        email,
      ]); //Checking if user already exists
      const arr = data.rows;
      if (arr.length != 0) {
        return res.status(400).json({
          error: "Email already there, No need to register again.",
        });
      } else {
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
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Database error while registring user!", //Database connection error
      });
    }
  }
};

exports.signIn = async (req, res) => {
  const { email, password, role } = req.body;
  if (role == "seller") {
    try {
      const data = await db.query(`SELECT * FROM sellers WHERE email= $1;`, [
        email,
      ]); //Verifying if the user exists in the database
      const selleremail = data.rows;
      if (selleremail.length === 0) {
        res.status(400).json({
          error: "Seller is not registered, Sign Up first",
          NotFound: true,
        });
      } else {
        const seller = await (
          await db.query(
            "SELECT * FROM sellers WHERE email = $1 AND password = crypt($2, password)",
            [email, password]
          )
        ).rows;
        if (seller.length > 0) {
          res.status(200).json({
            email: seller[0].email,
            password: seller[0].password,
            role: "seller",
          });
        } else {
          res.status(200).json({
            message: "The seller does not exist",
            NotFound: true,
          });
        }
        //-------------
      }
    } catch (error) {
      res.status(500).json({
        message: "An error has ocured",
        error,
      });
    }
  } else {
    try {
      const data = await db.query(`SELECT * FROM users WHERE email= $1;`, [
        email,
      ]); //Verifying if the user exists in the database
      const useremail = data.rows;
      if (useremail.length === 0) {
        res.status(400).json({
          error: "User is not registered, Sign Up first",
        });
      } else {
        const pdata = await db.query(
          "SELECT * FROM users WHERE email = $1 AND password = crypt($2, password)",
          [email, password]
        );
        const userpassword = pdata.rows;
        if (userpassword.length === 0) {
          res.status(400).json({
            error: "Enter correct password!",
          });
        } else {
          // const token = jwt.sign(process.env.SECRET_KEY);
          res.status(200).json({
            message: "User signed in!",
            token: token,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "An error has ocured",
        error,
      });
    }
  }
};

/*
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
        res
          .status(404)
          .json({ message: "Seller does not exist.", NotFound: true });
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
        res
          .status(404)
          .json({ message: "User does not exist.", NotFound: true });
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
*/
/*
 const sellerpassword = pdata.rows;
        if (sellerpassword.length === 0) {
          res.status(400).json({
            error: "Enter correct password!",
            NotFound: true,
          });
        } else {
          //const token = jwt.sign({ email: rows.data }, process.env.SECRET_KEY);
          res.status(200).json({
            message: "Seller signed in!",
            token: token,
          });
        }
*/
