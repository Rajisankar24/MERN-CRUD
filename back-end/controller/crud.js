const { ObjectId } = require("mongodb");
const { client } = require("../database/connect");
const data = client.db("crud-db").collection("crud-items");

const createData = async (req, res) => {
  const insertData = await data.insertOne({
    item: req.body.item,
  });
  res.status(201).json({
    _id: insertData.insertedId,
    item: req.body.item,
  });
};

const getData = async (req, res) => {
  const datas = await data.find({}).toArray();
  res.status(201).json(datas);
};

const deleteSingleData = async (req, res) => {
  const del = await data
    .deleteOne({ _id: ObjectId(req.params.id) })
    .then((e) => {
      res.status(201).json({ msg: "item deleted successfully" });
    });
};

const deleteData = async (req, res) => {
  const clear = await data.deleteMany({});
  res.status(201).json(clear);
};

const updateData = async (req, res) => {
  // console.log({ _id: ObjectId(req.params.id) });
  // console.log({ item: req.body.item });

  const edit = await data.updateOne(
    { _id: ObjectId(req.body._id) },
    { $set: { item: req.body.item } }
  );
  res.status(201).json(edit);
};

module.exports = {
  getData,
  createData,
  updateData,
  deleteData,
  deleteSingleData,
};
