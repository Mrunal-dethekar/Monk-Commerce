import Product from "./Product";
import React, { useEffect, useState } from "react";
import "./homePage.css";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { handlePopup, addProduct } from "../redux/action";
import Button from '@mui/material/Button';


var count = 1;

const HomePage = () => {
  const [query, setQuery] = useState(0);
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://stageapibc.monkcommerce.app/admin/shop/product?search=${query}&Fo&page=1`
      );
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, [query]);

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const addPro = () => {
    count++;
    dispatch(addProduct({id:count}));
  };

  const closeProduct = () => {
    dispatch(handlePopup());
  };

  return (
    <div className="homePage">
      {state.product.map((element) => (
        <Product key={element.id} element={element}/>
      ))}
      <button className="button" onClick={addPro}>
        Add Product
      </button>
      <div className="addProduct" style={{ display: state.popup.display }}>
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
          <div className="left">0 Selected Items</div>
          <div className="right">
          <Button variant="outlined" onClick={closeProduct}>Cancel</Button>
            <Button variant="contained" color="success">
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
