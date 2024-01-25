import React, { useEffect, useState } from "react";
import "./Form.css";
const Form = ({ data, editState }) => {
  const [list, setList] = useState({
    _id: "",
    item: "",
    isEdit: false,
  });

  const getValue = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!list.item) {
      alert("Please enter the list...");
    } else if (!list.isEdit) {
      let newItem = {
        item: list.item,
        isEdit: list.isEdit,
      };
      data(newItem);
      // console.log(newItem);
    } else {
      let newItem = {
        _id: list._id,
        item: list.item,
        isEdit: list.isEdit,
      };
      data(newItem);
    }
    setList({
      item: "",
    });
  };

  useEffect(() => {
    const edit = editState.edit;
    // console.log(edit);
    if (edit._id != null) {
      setList({
        _id: edit._id,
        item: edit.item,
        isEdit: true,
      });
      // console.log(list);
    }
  }, [editState]);

  return (
    <div>
      <form onSubmit={submitForm} className="input-cont">
        <input
          type="text"
          name="item"
          value={list.item}
          className="inputBox"
          placeholder="e.g.eggs"
          onChange={getValue}
        />
        <button type="submit" className="submit-btn">
          {list.isEdit ? `Update` : `Submit`}
        </button>
      </form>
    </div>
  );
};

export default Form;
