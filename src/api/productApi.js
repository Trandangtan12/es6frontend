import { axiosClient } from "./axiosClient";

const ProductAPI = {
  getAll() {
    const url = "/products";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(product) {
    const url = `/products`;
    return axiosClient.post(url, product);
  },
  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
  update(data, id) {
    const url = `/product/${id}`;
    return axiosClient.put(url, data);
  },
  search(inp) {
    const url = `/products?q=${inp}`;
    return axiosClient.get(url);
  },
};
export default ProductAPI;
