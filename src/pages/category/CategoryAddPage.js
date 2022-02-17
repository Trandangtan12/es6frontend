import CategoryAPI from "../../api/categoryApi.js";
import firebase from "../../firebase";
import { $ } from "../../utils.js";
const CategoryAddPage = {
  async render() {
    return /*html*/ `<form id = "form-add" class="w-1/2 mx-auto">
    <div class="form-group">
    <label for="">Tên Danh mục</label>
        <input type="text"  class="form-control" name="" id="categories-name"/>
        <div class="text-red-500" id="err-name"></div>
        </div>
        <div class="form-group">
        <label for="">Ảnh danh mục</label>
        <input type="file" class="form-control" name="" id="categories-image">
        <div class="text-red-500" id="err-image"></div>
        </div>
        
        <div class="mx-auto text-center">
        <input class="btn btn-primary btn-lg btn-block" type="submit">
        </div>
        </form>`;
  },
  afterRender() {
    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      if ($("#categories-name").value == 0) {
        $("#err-name").innerHTML = "*Tên sản phẩm không được để trống!!!";
        return false;
      }
      if ($("#categories-image").value == "") {
        $("#err-image").innerHTML = "*bạn chưa chọn ảnh sản phẩm!!!";
        return false;
      }
      const categoryImage = $("#categories-image").files[0];
      let storageRef = firebase.storage().ref(`images/${categoryImage.name}`);
      storageRef.put(categoryImage).then(function () {
        storageRef.getDownloadURL().then((url) => {
          const categories = {
            name: $("#categories-name").value,
            image: url,
          };
          alert("gửi thành công!!");
          CategoryAPI.add(categories);

          window.location.hash = "/admincategory";
        });
      });
    });
  },
};
export default CategoryAddPage;
