import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "JordansCandy",
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

app.get("/item", async (req, res) => {
    res.render("pages/item.ejs");
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

app.get("/cart", async (req, res) => {
    try {
        const cartresult = await db.query("SELECT * FROM cart");
        const items = cartresult.rows;
        res.render("pages/cart.ejs", { items });
    } catch (err) {
        console.error("Error fetching items from database:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/delete", async (req, res) => {
    try {
        let id = req.body.id
        await db.query("DELETE FROM cart WHERE id = $1", [id]);
        res.redirect("/cart")
    } catch (err) {
        console.error("Error fetching items from database:", err);
        res.status(500).send("Internal Server Error");
    }
})

app.post("/increase", async (req, res) => {
    try {
        let id = req.body.id
        let count = Number(req.body.count) + 1
        await db.query("UPDATE cart SET quantity = $1 WHERE id = $2", [count, id])
        res.redirect("/cart")
    } catch (err) {
        console.error("Error fetching items from database:", err);
        res.status(500).send("Internal Server Error");
    }
})

app.post("/decrease", async (req, res) => {
    try {
        let id = req.body.id
        let count = Number(req.body.count) - 1
        await db.query("UPDATE cart SET quantity = $1 WHERE id = $2", [count, id])
        res.redirect("/cart")
        console.log("Count:", count);
        console.log("ID:", id);
    } catch (err) {
        console.error("Error fetching items from database:", err);
        res.status(500).send("Internal Server Error");
    }
})

app.get("/checkout", async (req, res) => {
    try {
        const cartresult = await db.query("SELECT * FROM cart");
        const items = cartresult.rows;
        res.render("pages/checkout.ejs", { items });
    } catch (err) {
        console.error("Error fetching items from database:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/thankyou", async (req, res) => {
    res.render("pages/ty.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
