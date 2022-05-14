import { useDispatch } from "react-redux";
import "./product.css";
import { handlePopup, removeProduct } from "../../redux/action";
import AddProduct from "../AddProducts/AddProduct";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import SubProduct from "../SubProduct/SubProduct";

const Product = ({ element }) => {
  const [onOff, setOnOff] = useState(0);
  const [discount, setDisount] = useState(0);
  const [inputValue, setInputValue] = useState("0") 

  const dispatch = useDispatch();

  const handelPen = (id) => {
    dispatch(handlePopup(id));
  };

  const removePro = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <>
      <div className="product">
        <div className="box">
          <i className="fa-solid fa-grip-vertical"></i>
          <div className="row">
            {element.data.title ? (
              <p>{element.data.title}</p>
            ) : (
              <p style={{ color: "#00000066" }}>Select Product</p>
            )}
            <div className="pen">
              <i
                className="fa-solid fa-pen"
                onClick={() => handelPen(element.id)}
              ></i>
            </div>
          </div>
          <div
            className="selectDiscount"
            style={{ display: `${discount ? "flex" : "none"}` }}
          >
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <select name="cars" id="cars">
              <option value="% off">% Off</option>
              <option value="Flat Off">Flat Off</option>
            </select>
          </div>
          <div
            className="selectDiscountLabel"
            style={{ display: `${discount ? "none" : "flex"}` }}
            onClick={() => setDisount(1)}
          >
            Select Discount
          </div>
          <i
            className="fa-solid fa-xmark"
            onClick={() => removePro(element.id)}
          ></i>
        </div>
      </div>
      {element.data.rows.length != 0 && (
        <div className="viewMore">
          {onOff ? (
            <span onClick={() => setOnOff(onOff ? 0 : 1)}>
              Hide Details
              <ArrowDropUpIcon />
            </span>
          ) : (
            <span onClick={() => setOnOff(onOff ? 0 : 1)}>
              View Details
              <ArrowDropDownIcon />
            </span>
          )}
          <div
            className="rows"
            style={{ display: `${onOff ? "block" : "none"}` }}
          >
            {element.data.rows.map((ele, index) => (
              <SubProduct key={index} rowName={ele} parentId={element.id} />
            ))}
          </div>
        </div>
      )}
      <AddProduct id={element.id} />
    </>
  );
};

export default Product;
