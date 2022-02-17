import ProductAPI from "../../api/productApi";
import { parseRequestUrl, $ } from "../../utils.js";
import CategoryAPI from "../../api/categoryApi";
import firebase from "../../firebase";
const ProductUpdatePage = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductAPI.get(id);
    const { data: categories } = await CategoryAPI.getAll();
    return /*html*/ `<form id="form-update" class="w-1/2 mx-auto" action="">
    <div class="form-group">
    <input type="hidden" value="${product._id}" name="" id="update-id">
    </div>
    <div class="form-group">
    <label for="">Tên sản phẩm</label>
    <input class="form-control" type="text" value="${
      product.name
    }"  name="" id="update-name">
    </div>
    <div class="form-group">
    <label for="">Ảnh sản phẩm</label>
    <input class="form-control" type="file" value=""  name="" id="update-image">
    <input type="hidden" name="" id="update-hidden-url" value="${
      product.image
    }">
    <img src="${product.image}" alt="">
    </div>
    <div class="form-group">
    <label for="">Giá sản phẩm</label>
    <input class="form-control" type="number" value="${
      product.price
    }"  name="" id="update-price">
    </div>
    <div class="form-group">
    <label for="">Giá giảm</label>
    <input class="form-control" type="number" value="${
      product.sale
    }"  name="" id="update-sale">
    </div>
    <div class="form-group">
    <textarea name="" id="update-description" class="form-control" rows="10">${
      product.description
    }</textarea>
    </div>
    <div class="form-group">
    <label for="">Danh mục sản phẩm</label>
    <select class="border-2 border-gray-200 p-2" name="" id="update-cateid">
    ${categories.map((category) => {
      return `<option value="${category._id}">${category.name}</option>`;
    })}
    </select>
    </div>
    <div class="form-group">
    <button type="submit" class="btn btn-danger btn-block">Update</button>
    </form>`;
  },
  async afterRender() {
    const { id } = parseRequestUrl();
    $("#form-update").addEventListener("submit", (e) => {
      e.preventDefault();
      if ($("#update-image").value == "") {
        const data = {
          _id: $("#update-id").value,
          name: $("#update-name").value,
          image: $("#update-hidden-url").value,
          price: $("#update-price").value,
          sale: $("#update-sale").value,
          category: $("#update-cateid").value,
          description: $("#update-description").value,
        };
        alert("Update thành công!!!");
        ProductAPI.update(data, id);
        window.location.hash = "/adminproduct";
      } else {
        const productImage = $("#update-image").files[0];
        let storageRef = firebase.storage().ref(`images/${productImage.name}`);
        storageRef.put(productImage).then(function () {
          storageRef.getDownloadURL().then((url) => {
            const data = {
              _id: $("#update-id").value,
              name: $("#update-name").value,
              image: url,
              price: $("#update-price").value,
              sale: $("#update-sale").value,
              category: $("#update-cateid").value,
              description: $("#update-description").value,
            };
            alert("Update thành công!!!");
            ProductAPI.update(data, id);
            window.location.hash = "/adminproduct";
          });
        });
      }
    });
  },
};
export default ProductUpdatePage;
