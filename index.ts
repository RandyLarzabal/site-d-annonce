import express from "express";
import productRouter from './produit';
import usersRouter from "./user";
import db from './db'
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";
app.use(productRouter)
app.use(usersRouter);
var http = require("http").createServer(app);

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

const server = http.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});



app.get("/", (req, res) => { 
    db('products')
    .then((e) => {
      if(e) {
        res.render("index", {products : e});
      }
    });
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.get("/add-product", (req, res) => {
  res.render("add-product");
});
