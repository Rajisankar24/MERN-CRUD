import React, { useEffect, useState } from "react";
import Form from "./MyForm/Form";
import axios from "axios";
import Lists from "./EntryItems/Lists";

const MainApp = () => {
  const [myData, setMyData] = useState([]);
  const [editList, setEditList] = useState({
    edit: [],
  });
  // console.log(myData);

  useEffect(() => {
    getAllDatas();
  }, []);

  const createItem = (data) => {
    if (!data.isEdit) {
      axios.post("http://localhost:5000/crud", data).then((response) => {
        // console.log(response.data);
        getAllDatas();
      });
    } else {
      axios
        .patch("http://localhost:5000/crud/update", data)
        .then((response) => {
          getAllDatas();
        });
    }
  };

  const getAllDatas = () => {
    axios.get("http://localhost:5000/crud").then((response) => {
      setMyData(response.data);
    });
  };

  const editItem = (myData) => {
    setEditList({ ...editList, edit: myData });
    // console.log({ editList: myData });
  };

  const deleteOneData = (myData) => {
    axios
      .delete(`http://localhost:5000/crud/delete/${myData._id}`)
      .then((response) => {
        getAllDatas();
      });
    // console.log(myData._id);
  };

  const deleteAll = () => {
    alert("List deleted...");
    axios.delete("http://localhost:5000/crud/delete").then((response) => {
      getAllDatas();
    });
  };

  return (
    <div className="form">
      <h1>Grocery Bud</h1>
      <Form data={createItem} editState={editList} />
      <Lists
        myData={myData}
        editData={editItem}
        deleteOneData={deleteOneData}
        clear={deleteAll}
      />
    </div>
  );
};

export default MainApp;
