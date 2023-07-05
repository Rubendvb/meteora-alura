import axios from "axios";
import { ProductProps } from "../@types/product";

const API = "http://localhost:3000";

export const getAllProducts = async () => {
  return await axios.get<ProductProps[]>(`${API}/products`);
};
