import { useDispatch } from "react-redux";
import "./product.css";
import { handlePopup,removeProduct } from "../redux/action";

const Product = ({element}) => {
  const dispatch = useDispatch();

  const handelPen = () => {
    dispatch(handlePopup());
  };

  const removePro = (id)=>{
    dispatch(removeProduct(id));
  }

  return (
    <div className="product">
      <div className="box">
        <i className="fa-solid fa-grip-vertical"></i>
        <div className="row">
          <p>Select Product</p>
          <div className="pen">
            <i className="fa-solid fa-pen" onClick={handelPen}></i>
          </div>
        </div>
        <i className="fa-solid fa-xmark" onClick={()=>removePro(element.id)}></i>
      </div>
    </div>
  );
};

export default Product;
