const db = require("../config/database");
//const esClient = require("../config/elasticSearch");
const { Client } = require("@elastic/elasticsearch");

const esClient = new Client({ node: "http://localhost:9200" });

exports.createProduct = async (req, res) => {
  try {
    const { productname, description, quantity, price } = req.body;
    const { rows } = await db.query(
      "INSERT INTO products (productname, description, quantity, price) VALUES ($1, $2, $3, $4)",
      [productname, description, quantity, price]
    );

    res.status(201).send({
      message: "Product added successfully!",
      body: {
        product: { productname, description, quantity, price },
      },
    });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.listAllProducts = async (req, res) => {
  try {
    const response = await db.query(
      "SELECT * FROM products ORDER BY productname ASC"
    );
    res.status(200).send(response.rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  const searchText = req.params.text;
  await esClient
    .search({
      index: "products",
      body: {
        query: {
          match: { name: searchText.trim() },
        },
      },
    })
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error" });
    });
};

exports.findProductById = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM products WHERE productid = $1",
      [productId]
    );
    res.status(200).send(response.rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const { productname, description, quantity, price } = req.body;

    const response = await db.query(
      "UPDATE products SET productname = $1, description = $2, quantity = $3, price = $4 WHERE productid = $5",
      [productname, description, quantity, price, productId]
    );

    res.status(200).send({ message: "Product Updated Successfully!" });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    await db.query("DELETE FROM products WHERE productID = $1", [productId]);

    res
      .status(200)
      .send({ message: "Product deleted succsessfully!", productId });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
};
