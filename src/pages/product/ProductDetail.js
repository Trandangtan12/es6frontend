// import data from "../data.js";
// import axios from "axios";
import Header from "../../components/header.js";
import ProductAPI from "../../api/productApi.js";
import { parseRequestUrl, $, reRender } from "../../utils.js";
import CategoryAPI from "../../api/categoryApi.js";
const ProductDetail = {
  async render() {
    // const response = await axios(
    //   "https://5e79b4b817314d00161333da.mockapi.io/products"
    // );
    // const products = await response.data;
    const { id } = parseRequestUrl();
    const { data: product } = await ProductAPI.get(id);
    const { data: products } = await ProductAPI.getAll();
    const { data: categories } = await CategoryAPI.getAll();
    // console.log(request.id);
    // const product = products.find((product) => product.id == id);
    return /*html*/ `<title>${product.name}</title>
    <div class = "container w-5/6 mx-auto">
    <div><a class="text-blue-500" href="/">Trang chủ</a> / <a class="text-blue-500" href="/#/category/${
      product.category
    }">${categories
      .filter((cateId) => cateId._id == product.category)
      .map((categoryName) => {
        return `${categoryName.name}`;
      })
      .join("")}</a></div>
    <div class="text-3xl leading-loose border-b-2"> ${product.name}</div>
                     <div class = "row mt-4">
                      <div class = "col-6">
                          <img src = "${product.image}" class="mx-auto h-80">
                           </div>
                      <div class = "col-6 border-2 ">
                      <div class="mt-4">
                      <span>Giá: <span class="font-bold text-red-500 text-xl"> ${
                        product.price
                      }đ</span></span>
                      <span class="text-gray-500 line-through">${
                        product.sale
                      }đ</span>
                      </div>
                      <div class="mt-4">${product.description}</div>
                      <div class="mt-4"><button id="btn-add-card" type="button" class="btn btn-outline-danger btn-lg">Thêm vào giỏ hàng</button>
                      <button type="button" class="btn btn-danger btn-lg">Mua ngay</button></div>
                      </div>
            </div>

            <div class="text-2xl leading-loose mt-4"> Hàng cùng loại</div>
            <div class="grid grid-cols-4 gap-2 mt-4">
            ${products
              .filter((pd) => pd.category == product.category)
              .map((item) => {
                return /*html*/ `<div class="border-gray-200 border-2 p-4 hover:border-blue-400 transition duration-200 ease-in-out">
                <div>
                <img src="${item.image}" class="mx-auto text-center" width="250px" alt="">
                </div>
                <div class="mt-2  capitalize">${item.name}</div>
                <div>
                <span class="font-bold text-red-500 text-lg">${item.price}đ</span>
                <span class="text-gray-500 line-through">${item.sale}đ</span>
                </div>
                <a href="/#/products/${item.id}">Xem chi tiết</a>
                </div>`;
              })
              .slice(0, 4)
              .join("")}
            </div>
            </div>`;
  },
  async afterRender() {
    $("#btn-add-card").addEventListener("click", async (e) => {
      e.preventDefault();
      const { id } = parseRequestUrl();
      const { data: product } = await ProductAPI.get(id);
      if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
      }
      product = JSON.parse(localStorage.getItem("products"));

      localStorage.setItem("products", JSON.stringify(products));
      reRender(Header, "#header");

      alert("Thêm vào giỏ hàng thành công");
    });
    return `${await Header.afterRender()}`;
  },
};

export default ProductDetail;
