const express = require("express");
const cors = require("cors");


const { CategoryRouter } = require("./src/routes/category.route");
const { ProductRouter } = require("./src/routes/product.route");
const { UserRouter } = require("./src/routes/user.route");
const {OrderRouter} = require('./src/routes/order.route');
const { connection } = require("./config");

require("dotenv").config();

const PORT = process.env.PORT ||5000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/category",CategoryRouter)
app.use("/products",ProductRouter)
app.use("/user",UserRouter)
app.use("/order",OrderRouter)


app.get("/", (req, res) => {
  res.send("Welcome to ecom Home Route");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to DataBase");
  } catch (err) {
    console.log("Not connected DataBase");
    console.log(err);
  }
  console.log(`Server is running at port ${process.env.port}`);
});
