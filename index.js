import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Candy Store",
    password: "Jordannguyen2004",
    port: 5432,
});
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM inventory");
        const items = result.rows;
        res.render("pages/index.ejs", { items });
    } catch (err) {
        console.error("Error fetching items from database:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/products", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM inventory");
        const items = result.rows;
        res.render("pages/products.ejs", { items });
    } catch (err) {
        console.error("Error fetching items from database:", err);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
