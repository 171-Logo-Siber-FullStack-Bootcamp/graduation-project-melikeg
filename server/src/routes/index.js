const express = require("express");

const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Welcome to the Node.js API + PostgreSQL!",
  });
});

module.exports = router;
