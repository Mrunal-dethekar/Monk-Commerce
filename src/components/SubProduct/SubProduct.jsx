import React from "react";
import { useDispatch } from "react-redux";
import "./subProduct.css";
import { removeProductRow } from "../../redux/action";

const SubProduct = ({ rowName, parentId }) => {
  const dispatch = useDispatch();

  const removeRow = (parentId, rowName) => {
    const payload = {
      parentId: parentId,
      rowName: rowName,
    };
    dispatch(removeProductRow(payload));
  };

  return (
    <div className="subProduct">
      <div className="box">
        <i className="fa-solid fa-grip-vertical"></i>
        <div className="row">{rowName}</div>
        <i
          className="fa-solid fa-xmark"
          onClick={() => removeRow(parentId, rowName)}
        ></i>
      </div>
    </div>
  );
};

export default SubProduct;
