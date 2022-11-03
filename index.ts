import express from "express";

const app = express();
const port = process.env.PORT || "8000";

app.set('view engine', 'pug')

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

app.get("/", (req, res) => {
    res.render("index");
  });