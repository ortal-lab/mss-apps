const express = require("express");
const router = express.Router();
const {paginatedResults}= require('./logic')
router.get('/',(req, res) => {
    res.send(req.images.slice(0,9));
  })
router.get("/paginate", paginatedResults(), (req, res) => {
  res.json(res.paginatedResults);
});
module.exports = router;
