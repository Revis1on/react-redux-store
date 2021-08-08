import { combineReducers } from "redux";
import { productReduces, selectedProductReduces } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReduces,
    product: selectedProductReduces,
})