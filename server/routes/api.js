const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is the root page ");
});

router.get("/movie", (req, res) => {
  res.send("retrieve all moveis");
});

module.exports = router;
