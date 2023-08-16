const express = require("express");
const connection = require("./config/db.js");
const router = require("./Routes/movie-routes.js");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.set("views",__dirname+"views")

app.use(express.json());

app.use(router) 

app.listen(4000,()=>{
    console.log("listen on port 3606");
    connection();
})