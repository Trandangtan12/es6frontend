import { axiosClient } from "./axiosClient";

const CategoryAPI = {
  getAll() {
    const url = "/categories";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(categories) {
    const url = `/categories`;
    return axiosClient.post(url, categories);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};
export default CategoryAPI;
