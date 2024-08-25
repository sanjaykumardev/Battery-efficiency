const express = require("express");
const app = express();


const PORT = 5000 ;


app.use(express.json());






//? server connection
app.listen(PORT, () => {
  console.log("connected to port "+ PORT);
});
