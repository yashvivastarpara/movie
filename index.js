const express = require("express");
const connect = require("./config/db.js");
const router = require("./Routes/movie-routes.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/view");

app.use(express.json());

app.use(router);

app.listen(4000, () => {
  console.log("listen on port 4000");
  connect();
});
