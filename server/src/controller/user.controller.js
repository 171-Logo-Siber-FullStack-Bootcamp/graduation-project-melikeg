const { response } = require("express");
const db = require("../config/database");

exports.createUser = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
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
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.listAllUsers = async (req, res) => {
  const response = await db.query("SELECT * FROM users ORDER BY userid ASC");
  res.status(200).send(response.rows);
};

exports.updateUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { email, fullname } = req.body;

    const response = await db.query(
      "UPDATE users SET email = $1, fullname = $2 WHERE userid = $3",
      [email, fullname, userId]
    );

    res.status(200).send({ message: "User updated successfully!" });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { rows } = await db.query("DELETE FROM users WHERE userid = $1", [
      userId,
    ]);

    if (!rows.length)
      return res.status(404).json({ message: "user not found" });

    return res
      .status(200)
      .json({ message: "User deleted successfully!", userId });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { rows } = await db.query(
      "SELECT * FROM users WHERE email = $1 AND password = crypt($2, password)",
      [email, password]
    );
    if (!rows.length)
      return res.status(404).json({ message: "User not found." });

    return res.status(200).json({ message: "Authentication succsessful." });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};
