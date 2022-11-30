const axios = require("axios");
let images = [];
const sortImages = (images) => {
 return images.sort((a, b) => {
    return a.id - b.id;
  });
};

const getAllImages = async (req, res, next) => {
  try {
    const category=req.query.category ||'flowers'
    const result = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`,
      {
        headers: {
          "Accept-Encoding": "application/json",
        },
      }
    );
    images = result.data.hits;
    images = sortImages(images);
    //console.log(images)
    req.images = images;
    next();
    // console.log(images)
    //res.send(images);
  } catch (e) {
    console.log(e);
  }
};

// get paginated results

module.exports = { sortImages, getAllImages };
