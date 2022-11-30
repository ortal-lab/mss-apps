const express = require("express");
const router = express.Router();
const {paginatedResults}= require('./logic')
router.get('/',(req, res) => {
    res.send(req.images);
  })
router.get("/paginate", paginatedResults(), (req, res) => {
  res.json(res.paginatedResults);
});
module.exports = router;
