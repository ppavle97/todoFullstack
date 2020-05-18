const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "pavle",
  password: "password",
  database: "vezba",

});

db.connect((err) => {
  if (err) {
    console.log("Connect error --> " + err);
  } else {
    console.log("Connected...");
  }
});

 app.get("/api/customers", (req, res) => {
  let sql = "SELECT * FROM Todos";
  let query = db.query(sql, (err, results) => {
    if (err) {
      console.log("Fetch error --> " + err);
    }
    console.log(results);
    res.send(results);
  });
});

const port = 5000;

app.listen(port, () => console.log("Server started on ports ${port}"));

/* const customers = [
  {
    id: 1,
    title: "List item 1",
    description: "Description 1 lorem ipsum hehe",
  },
  {
    id: 2,
    title: "List item 2",
    description: "Description 2 lorem ipsum hehe",
  },
  {
    id: 3,
    title: "List item 3",
    description: "Description 3 lorem ipsum hehe",
  },
];

res.json(customers); */
