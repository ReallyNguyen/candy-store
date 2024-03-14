import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "Candy Store",
//     password: "Jordannguyen2004",
//     port: 5432,
// });
// db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    res.render("pages/index.ejs");
});

app.get("/products", async (req, res) => {
    res.render("pages/products.ejs");
});

app.get("/item", async (req, res) => {
    res.render("pages/item.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
