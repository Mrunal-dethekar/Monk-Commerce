import React from "react";
import "./addProduct.css";
import Button from "@mui/material/Button";
import Table from "../Table/Table";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePopup, sendData,setTempState } from "../../redux/action";

const AddProduct = ({ id }) => {
  const state = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  const [query, setQuery] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://stageapibc.monkcommerce.app/admin/shop/product?search=${query}&Fo&page=1`
      );
      const data = await res.json();
      if(data)
      setData(data);
    };
    fetchData();
  }, [query]);

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const closeProduct = () => {
    dispatch(handlePopup());
  };

  const sendDataFun = (id) => {
    dispatch(sendData(id));
    dispatch(handlePopup());
    dispatch(setTempState({}));
  };

  return (
    <div
      className="addProduct"
      style={
        state.popup.id == id
          ? { display: state.popup.display }
          : { display: "none" }
      }
    >
      <div className="upperRow">
        <p>Add Products</p>
        <i className="fa-solid fa-xmark" onClick={closeProduct}></i>
      </div>
      <div className="inputRow">
        <div className="inputField">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search Product"
            onChange={changeQuery}
          />
        </div>
      </div>
      <div className="table">
        {data.map((product, index) => (
          <Table product={product} key={index} />
        ))}
      </div>
      <div className="lowerRow">
        <div className="left">
          {Object.keys(state.tempState).length ? "1" : "0"} Item Selected
        </div>
        <div className="right">
          <Button variant="outlined" onClick={closeProduct}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => sendDataFun(id)}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
