require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 8888;

// đọc hiểu data mà client gửi lên
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',(req,res) =>{res.send("Server success")})

app.listen(port, () => {
  console.log( 'Server running on the port:',+port)
});
