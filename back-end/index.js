const express = require("express");
const { connectDb } = require("./database/connect");
const crudRouter = require("./router/crudRouter");
const cors = require("cors");
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTER
app.use("/crud", crudRouter);

port = 5000;
const start = async () => {
  try {
    await connectDb();
    app.listen(port, console.log(`Server is running on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
