const db = require("../config/database");
const multer = require("multer");
const path = require("path");

//const esClient = require("../config/elasticSearch");
const { Client } = require("@elastic/elasticsearch");

const esClient = new Client({ node: "http://localhost:9200" });
//upload an image
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `image-${Date.now()}` + path.extname(file.originalname));
    //path.extname get the uploaded file extension
  },
});

const multerFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(png|jpg)$/)) {
    // upload only png and jpg format
    return cb(new Error("Please upload a Image"));
  }
  cb(null, true);
};

exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.createProduct = async (req, res) => {
  const allquery = await db.query(
    `INSERT INTO products(productname, description, quantity, price, image) VALUES ('${req.body.productname}','${req.body.description}', '${req.body.quantity}','${req.body.price}','${req.file.filename}')`
  );
  res
    .status(200)
    .json({ statusCode: 200, status: true, message: "Image added", data: [] });
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
