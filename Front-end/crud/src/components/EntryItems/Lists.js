import React from "react";
import "./List.css";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const Lists = ({ myData, editData, deleteOneData, clear }) => {
  return (
    <div>
      {myData.map((list, index) => {
        return (
          <div key={index} className="list-container">
            <h1 className="bud-name"> {list.item}</h1>
            <button
              type="button"
              className="edit-btn"
              onClick={() => editData(list)}
            >
              <FiEdit className="edit" />
            </button>
            <button
              type="button"
              className="del-btn"
              onClick={() => deleteOneData(list)}
            >
              <MdDeleteForever className="del" />
            </button>
          </div>
        );
      })}
      {myData.length > 0 && (
        <button type="submit" className="clear-btn" onClick={clear}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default Lists;
