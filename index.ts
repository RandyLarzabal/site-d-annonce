import express from "express";
import usersRouter from "./user";
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";
app.use(usersRouter);
var http = require("http").createServer(app);

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

const server = http.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.get("/add-product", (req, res) => {
  res.render("add-product");
});
