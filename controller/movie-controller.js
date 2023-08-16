const { request } = require("express");
const getdir = require("../components");
const movie = require("../model/movie-schema");
const moviedata = async (req, res) => {
  try {
    console.log(req.body);
    await moviedetails.create(req.body);
    res.send("movie details added");
  } catch (error) {
    res.send(error.message);
  }
};
const movieImage = async (req, res) => {
  // console.log(req.files);
  //   console.log(req.body);
  let path = getdir();

  let images = [];
  for (let i = 0; i < req.files.length; i++) {
    images.push(path + "/" + req.files[i].path);
  }

  let data = {
    name: req.body.name,
    rating: req.body.rating,
    discription: req.body.discription,
    relisedate: req.body.relisedate,
    language: req.body.language,
    image: images,
  };

  console.log(data);
  res.send("image added successfully");
};

const moviedetails = async (req, res) => {
  let data = await movie.find();
  res.send(data);
  console.log("addesd");
};
module.exports = { moviedata, movieImage, moviedetails };
