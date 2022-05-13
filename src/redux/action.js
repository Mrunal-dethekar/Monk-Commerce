export const POPUP = "POPUP";
export const ADDPRODUCT = "ADDPRODUCT";
export const REMOVEPRODUCT = "REMOVEPRODUCT";

export const handlePopup = () => {
  return {
    type: POPUP,
  };
};

export const addProduct = (data) => {
  return {
    type: ADDPRODUCT,
    payload: data,
  };
};

export const removeProduct = (data) => {
  return {
    type: REMOVEPRODUCT,
    payload: data,
  };
};
