// import data from "../data.js";
import ProductAPI from "../../api/productApi";
// import axios from "axios";
const ProductsPage = {
  async render() {
    try {
      const { data: products } = await ProductAPI.getAll();
      // const response = await axios(
      //   "https://5e79b4b817314d00161333da.mockapi.io/products"
      // );
      // const products = await response.data;

      const result = products
        .map((product) => {
          return /*html*/ `
          <div class="border-gray-200 border-2 p-4 hover:border-blue-400 transition duration-200 ease-in-out">
        <div>
        <img src="${product.image}" class="mx-auto text-center" width="250px" alt="">
        </div>
        <div class="mt-2  capitalize">${product.name}</div>
        <div>
        <span class="font-bold text-red-500 text-lg">${product.price}đ</span>
        <span class="text-gray-500 line-through">${product.sale}đ</span>
        </div>
        <a href="/#/product/${product._id}">Xem chi tiết</a>

        </div>
          `;
        })
        .join("");
      return /*html*/ `<title>Tất cả sản phẩm</title>
      <div class = "container w-5/6 mx-auto"><h1 class = "font-bold text-2xl">Tất cả sản phẩm</h1>
        <div class="grid grid-cols-4 gap-3">
        ${result}
        </div>
        
        </div>`;
    } catch (error) {
      console.log(error);
    }
  },
};
export default ProductsPage;
