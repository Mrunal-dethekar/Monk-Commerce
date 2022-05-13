import { POPUP, ADDPRODUCT,REMOVEPRODUCT } from "./action";

const intialState = {
  popup: { display: "none", opacity: "1" },
  product : [{ id: 1 }],
};

export const myReducer = (state = intialState, action) => {
  const Payload = action.payload;
  switch (action.type) {
    case POPUP: {
      return {
        ...state,
        popup: {
          display: `${state.popup.display == "none" ? "block" : "none"}`,
          opacity: `${state.popup.opacity == "1" ? "0.2" : "1"}`,
        },
      };
    }
    case ADDPRODUCT: {
      return {
        ...state,
        product : [...state.product, Payload]
      };
    }
    case REMOVEPRODUCT: {
      const newData = state.product.filter((e)=> e.id!=Payload);
      return {
        ...state,
        product : newData,
      };
    }
    default:
      return { ...intialState };
    }
};
