import ProductAPI from "../../api/productApi.js";
import CategoryAPI from "../../api/categoryApi.js";
import firebase from "../../firebase";
import { $ } from "../../utils.js";
const CategoryAddPage = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();
    return /*html*/ `<form id = "form-add" class="w-1/2 mx-auto">
    <div class="form-group">
    <label for="">Tên sản phẩm</label>
        <input type="text"  class="form-control" name="" id="product-name"/>
        <div class="text-red-500" id="err-name"></div>
        </div>
        <div class="form-group">
        <label for="">Ảnh sản phẩm</label>
        <input type="file" class="form-control" name="" id="product-image">
        <div class="text-red-500" id="err-image"></div>
        </div>
        <div class="form-group">
        <label for="">Giá sản phẩm</label>
        <input type="number" class="form-control" name="" id="product-price">
        <div class="text-red-500" id="err-price"></div>
        </div>
        <div class="form-group">
        <label for="">Giá gốc</label>
        <input type="number" class="form-control" name="" id="product-sale">
        <div class="text-red-500" id="err-sale"></div>
        </div>
        <div class="form-group">
    <label>Mô tả sản phẩm</label>
    <textarea class="form-control" id="product-description" rows="3"></textarea>
  </div>
        <div class="form-group">
        <label for="">Danh mục sản phẩm</label>
        <select class="border-2 border-gray-200 p-2" name="" id="product-cateid">
        ${categories.map((category) => {
          return `<option value="${category._id}">${category.name}</option>`;
        })}
        </select>
        </div>
        <div class="mx-auto text-center">
        <input class="btn btn-primary btn-lg btn-block" type="submit">
        </div>
        </form>`;
  },
  async afterRender() {
    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      if ($("#product-name").value == 0) {
        $("#err-name").innerHTML = "*Tên sản phẩm không được để trống!!!";
        return false;
      }
      if ($("#product-image").value == "") {
        $("#err-image").innerHTML = "*bạn chưa chọn ảnh sản phẩm!!!";
        return false;
      }
      if ($("#product-price").value == 0) {
        $("#err-price").innerHTML = "*bạn chưa nhập giá!!!";
        return false;
      } else if ($("#product-price").value < 0) {
        $("#err-price").innerHTML = "Không được nhập giá âm!!!";
        return false;
      }
      if ($("#product-sale").value == 0) {
        $("#err-sale").innerHTML = "*bạn chưa nhập giá gốc!!!";
        return false;
      } else if ($("#product-sale").value < 0) {
        $("#err-sale").innerHTML = "Không được nhập giá gốc âm!!!";
        return false;
      }
      // const productImage = $("#product-image").files[0];
      // var formData = new FormData();

      // formData.append("name", $("#product-name").value);
      // formData.append("price", $("#product-price").value);
      // formData.append("description", $("#product-description").value);
      // formData.append("category", $("#product-cateid").value);
      // formData.append("photo", productImage);
      // ProductAPI.add(formData);
      const productImage = $("#product-image").files[0];
      let storageRef = firebase.storage().ref(`images/${productImage.name}`);
      storageRef.put(productImage).then(function () {
        storageRef.getDownloadURL().then((url) => {
          const products = {
            name: $("#product-name").value,
            price: $("#product-price").value,
            description: $("#product-description").value,
            image: url,
            category: $("#product-cateid").value,
            sale: $("#product-sale").value,
          };
          alert("gửi thành công!!");
          ProductAPI.add(products);
          window.location.hash = "/adminproduct";
        });
      });
    });
  },
};
export default CategoryAddPage;
