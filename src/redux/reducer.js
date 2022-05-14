import {
  POPUP,
  ADDPRODUCT,
  REMOVEPRODUCT,
  TEMPSTATE,
  SENDDATA,
  REMOVEPRODUCTROW,
} from "./action";

const intialState = {
  popup: { display: "none", opacity: "1", id: "" },
  product: [{ id: 1, data: { title: "", rows: [] } }],
  tempState: {},
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
          id: Payload ? Payload : "",
        },
      };
    }

    case ADDPRODUCT: {
      return {
        ...state,
        product: [...state.product, Payload],
      };
    }

    case REMOVEPRODUCT: {
      const newData = state.product.filter((e) => e.id != Payload);
      return {
        ...state,
        product: newData,
      };
    }

    case REMOVEPRODUCTROW: {
      const newData = state.product.map((e) => {
        if (e.id == Payload.parentId) {
          return {
            id: Payload.parentId,
            data: {
              ...e.data,
              rows: e.data.rows.filter((ele) => ele != Payload.rowName),
            },
          };
        } else {
          return e;
        }
      });
      return {
        ...state,
        product: newData,
      };
    }

    case TEMPSTATE: {
      return {
        ...state,
        tempState: Payload,
      };
    }

    case SENDDATA: {
      return {
        ...state,
        product: state.product.map((e) => {
          if (e.id == Payload) {
            return { id: Payload, data: state.tempState };
          } else {
            return e;
          }
        }),
      };
    }

    default:
      return { ...intialState };
  }
};
