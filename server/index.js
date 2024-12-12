const express = require('express')
const dotenv = require("dotenv");
const port = 3000
const cors=require("cors")
const connectDB = require("./config/mongoose");
const { fetchAllUsers } = require("./controllers/user.controller");

const app = express();

dotenv.config(); 

app.use(express.json());

connectDB();
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', fetchAllUsers);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

