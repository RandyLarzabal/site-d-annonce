import express from "express";
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.render("index");
});
