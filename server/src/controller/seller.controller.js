const { response } = require("express");
const db = require("../config/database");

exports.listAllSellers = async (req, res) => {
  const response = await db.query("SELECT * FROM sellers ORDER BY id ASC");
  res.status(200).send(response.rows);
};

exports.updateSellerById = async (req, res) => {
  try {
    const Id = parseInt(req.params.id);
    const { email, fullname } = req.body;

    const response = await db.query(
      "UPDATE sellers SET email = $1, fullname = $2 WHERE id = $3",
      [email, fullname, Id]
    );

    res.status(200).send({ message: "Seller updated successfully!" });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteSellerById = async (req, res) => {
  try {
    const Id = parseInt(req.params.id);
    const { rows } = await db.query("DELETE FROM sellers WHERE id = $1", [Id]);

    if ((rows.length = 0)) {
      res.status(404).json({ message: "seller not found" });
    }
    return res
      .status(200)
      .json({ message: "Seller deleted successfully!", Id });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};
