const express = require("express");
const crudRouter = express.Router();

const {
  getData,
  createData,
  updateData,
  deleteData,
  deleteSingleData,
} = require("../controller/crud");

crudRouter.route("/").get(getData).post(createData);
crudRouter.route("/delete").delete(deleteData);
crudRouter.route("/delete/:id").delete(deleteSingleData);
crudRouter.route("/update").patch(updateData);

module.exports = crudRouter;
