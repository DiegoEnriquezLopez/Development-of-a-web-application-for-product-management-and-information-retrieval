const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql",
  multipleStatements: true
});

db.connect(err => {
  if (err) {
    console.log("Error al conectar a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL LOCAL");
});

app.get("/api/productos", (req, res) => {
  db.query("SELECT * FROM products ORDER BY id ASC", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error en la consulta" });
    }
    res.json(results);
  });
});

app.get("/api/productos/:id", (req, res) => {
  db.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error en la consulta" });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      res.json(results[0]);
    }
  );
});

app.post("/api/productos", (req, res) => {
  const { name, price, img, category, description } = req.body;

  db.query(
    "INSERT INTO products (name, price, img, category, description) VALUES (?, ?, ?, ?, ?)",
    [name, price, img, category, description],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error al insertar producto" });
      }

      res.json({ message: "Producto agregado", id: result.insertId });
    }
  );
});

app.put("/api/productos/:id", (req, res) => {
  const { name, price, img, category, description } = req.body;

  db.query(
    "UPDATE products SET name=?, price=?, img=?, category=?, description=? WHERE id=?",
    [name, price, img, category, description, req.params.id],
    err => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error al actualizar" });
      }

      res.json({ message: "Producto actualizado" });
    }
  );
});

app.delete("/api/productos/:id", (req, res) => {
  const id = req.params.id;

  const sql = `
    DELETE FROM products WHERE id = ?;
    SET @count = 0;
    UPDATE products SET id = (@count:=@count+1) ORDER BY id;
    ALTER TABLE products AUTO_INCREMENT = 1;
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error al eliminar y reordenar IDs" });
    }

    res.json({ message: "Producto eliminado y IDs reordenados" });
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor LOCAL corriendo en http://localhost:${PORT}`);
});
