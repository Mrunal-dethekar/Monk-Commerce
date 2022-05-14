import Product from "../Product/Product";
import "./homePage.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/action";

var count = 1;

const HomePage = () => {
  const state = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  const addPro = () => {
    count++;
    dispatch(addProduct({ id: count, data: { title: "", rows: [] } }));
  };

  return (
    <div className="homePage">
      {state.product.map((element) => (
        <Product key={element.id} element={element} />
      ))}
      <button className="button" onClick={addPro}>
        Add Product
      </button>
    </div>
  );
};

export default HomePage;
