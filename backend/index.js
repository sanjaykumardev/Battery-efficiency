const express = require("express");
const app = express();
const mysql = require("mysql2"); // Use MySQL client
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 5000;

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

// MySQL connection setup
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port:  3306,  // Use the default MySQL port 3306
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Backend logic for four input fields
app.post("/details", (req, res) => {
  const { designcapacity, fullcharge, dischargetime, chargetime } = req.body;

  try {
    const queryText = "INSERT INTO battery (designcapacity, fullcharge, dischargetime, chargetime) VALUES (?, ?, ?, ?)";
    const values = [designcapacity, fullcharge, dischargetime, chargetime];

    connection.query(queryText, values, (err, result) => {
      if (err) {
        console.error("Error inserting data into MySQL:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("Data inserted into MySQL successfully:", result);
        res.json("Successfully registered");
      }
    });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Server connection
app.listen(PORT, () => {
  console.log("Connected to port " + PORT);
});
