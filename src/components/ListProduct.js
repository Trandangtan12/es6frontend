import ProductAPI from "../api/productApi";
import { reRender, $ } from "../utils.js";
const ListProduct = {
  async render() {
    const { data: products } = await ProductAPI.getAll();
    return /*html*/ `
    <div class="flex justify-between mb-3">
    <div>Tổng sản phẩm: ${products.length}</div>
    </div>
    <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Ảnh sản phẩm</th>
        <th>Thao tác</th>
      
      </tr>
    </thead>
    <tbody>
    ${products
      .map((product, index) => {
        return /*html*/ `
      <tr>
        <td>${index}</td>
        <td width= "200px;">${product.name}</td>
        <td>${product.price}</td>
        <td><img src = "${product.image}" width="200px" /></td>
        <td>
        <a href = "/#/updateproduct/${product._id}"  class = "btn btn-primary"> Update </a>
        <button data-id ="${product._id}" class = "btn btn-remove btn-danger"> Remove </button>
        </td>
      </tr>`;
      })
      .join("")}
      
    </tbody>
  </table>`;
  },
  async afterRender() {
    const btns = $("#list-products .btn-remove");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", async function () {
        const question = confirm("Bạn có chắc muốn xóa không?");
        if (question) {
          await ProductAPI.remove(id);
          await reRender(ListProduct, "#list-products");
        }
      });
    });
  },
};
export default ListProduct;
