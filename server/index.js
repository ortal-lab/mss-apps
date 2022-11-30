const express = require("express");
const router = require("./router");
const cors = require("cors");
const { getAllImages } = require("./controller");

const app = express();
const port = 5000;

app.use(cors());
app.use("/", getAllImages);
app.use("/images", router);
console.log('la')
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
