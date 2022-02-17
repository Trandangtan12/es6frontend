import { axiosClient } from "./axiosClient";

const userAPI = {
  getAll() {
    const url = "/account";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/account/${id}`;
    return axiosClient.get(url);
  },
  signup(user) {
    const url = `/signup`;
    return axiosClient.post(url, user);
  },
  remove(id) {
    const url = `/account/${id}`;
    return axiosClient.delete(url);
  },
  update(data, id) {
    const url = `/account/${id}`;
    return axiosClient.put(url, data);
  },
  getAccount(email, password) {
    const url = `/signin?_email=${email}&_password=${password}`;
    return axiosClient.post(url);
  },
  signin(user) {
    const url = `/signin`;
    return axiosClient.post(url, user);
  },
};
export default userAPI;
