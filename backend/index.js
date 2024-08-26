const express = require("express");
const app = express();
const mysql = require("mysql2")
const cors = require("cors");
const PORT = 5000 ;


app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

//mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sanjay007",
  database: "battery-details"
});


// backend logic for four input field
app.post('/details' , async(req ,res) =>{
  const {designcapacity,fullcharge,dischargetime,chargetime} = req.body;
  try{
    connection.query('INSERT INTO battery (designcapacity,fullcharge,dischargetime,chargetime) VALUES (? ,? ,? ,?)', [designcapacity,fullcharge,dischargetime,chargetime],
      (err,result)=> {
        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Data inserted into MySQL successfully:', result);
          res.json('Successfully registered');
        }
      }
    );
  }
  catch(err){
    console.log("error occurs" , err);
  }
})


// connecting to mysql 
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});


//? server connection
app.listen(PORT, () => {
  console.log("connected to port "+ PORT);
});
