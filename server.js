const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
 
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;


//Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

//use the routers
app.use('/user',userRoutes);
app.use('/candidate',candidateRoutes);

  
app.listen(4000, () => {
    console.log("listening on port 4000");
  });
  