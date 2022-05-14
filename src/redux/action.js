export const POPUP = "POPUP";
export const ADDPRODUCT = "ADDPRODUCT";
export const REMOVEPRODUCT = "REMOVEPRODUCT";
export const REMOVEPRODUCTROW = "REMOVEPRODUCTROW";
export const TEMPSTATE = "TEMPSTATE";
export const SENDDATA = "SENDDATA";

export const handlePopup = (data) => {
  return {
    type: POPUP,
    payload: data,
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

export const removeProductRow = (data) => {
  return {
    type: REMOVEPRODUCTROW,
    payload: data,
  };
};

export const setTempState = (data) => {
  return {
    type: TEMPSTATE,
    payload: data,
  };
};

export const sendData = (data) => {
  return {
    type: SENDDATA,
    payload: data,
  };
};
