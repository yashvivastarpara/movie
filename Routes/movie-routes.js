const { Router } = require("express");
const multer = require("multer");

const { movieImage, moviedetails } = require("../controller/movie-controller");
const router = Router();
router.get("/", (req, res) => {
  res.send("welcome to home");
});

let storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).array("profile");

router.post("/image", upload, movieImage);

router.get("/image", (req, res) => {
  res.render("imguplode");
});

router.get("/moviedetails", (req, res) => {
  console.log(req.body);
  res.send("movie details added");
});

module.exports = router;
