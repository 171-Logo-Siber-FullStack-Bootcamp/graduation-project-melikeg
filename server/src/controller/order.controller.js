const db = require("../config/database");
const logger = require("../scripts/logger/Project");

exports.createOrder = async (req, res) => {
  try {
    const { productname, price, quantity } = req.body;
    const { rows } = await db.query(
      "INSERT INTO orders (productname, price, quantity) VALUES ($1, $2, $3)",
      [productname, price, quantity]
    );

    res.status(201).send({
      message: "Order added successfully!",
      body: {
        product: { productname, price, quantity },
      },
    });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.listAllOrders = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM orders");
    res.status(200).send(response.rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
  logger.log({
    level: "info",
    message: "Hello distributed log files!",
  });
};

exports.deleteOrderById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await db.query("DELETE FROM orders WHERE id = $1", [id]);

    res.status(200).send({ message: "Order deleted succsessfully!", id });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};
