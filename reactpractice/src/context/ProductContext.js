import { createContext, useContext } from "react";

export const ProductContext = () => {
  return createContext([{}]);
};

export const Value = () => {
  return useContext(ProductContext);
};
