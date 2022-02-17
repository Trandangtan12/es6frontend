import CategoryAPI from "../api/categoryApi";
import { reRender, $ } from "../utils.js";
const ListCategory = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();
    return /*html*/ `
    <div class="flex justify-between mb-3">
    <div>Tổng sản phẩm: ${categories.length}</div>
    </div>
    <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Ảnh sản phẩm</th>
        <th>Thao tác</th>
      
      </tr>
    </thead>
    <tbody>
    ${categories
      .map((category, index) => {
        return /*html*/ `
      <tr>
        <td>${index}</td>
        <td width= "200px;">${category.name}</td>
        <td><img src = "${category.image}" width="200px" /></td>
        <td>
        <a href = "/#/updateproduct/${category._id}"  class = "btn btn-primary"> Update </a>
        <button data-id ="${category._id}" class = "btn btn-remove btn-danger"> Remove </button>
        </td>
      </tr>`;
      })
      .join("")}
      
    </tbody>
  </table>`;
  },
  async afterRender() {
    const btns = $("#list-categories .btn-remove");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      console.log(btn);
      btn.addEventListener("click", async function () {
        const question = confirm("Bạn có chắc muốn xóa không?");
        if (question) {
          await CategoryAPI.remove(id);
          await reRender(ListCategory, "#list-categories");
        }
      });
    });
  },
};
export default ListCategory;
