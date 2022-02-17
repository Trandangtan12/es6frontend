import { parseRequestUrl } from "../../utils";
import ProductAPI from "../../api/productApi";
const CategoryPage = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: products } = await ProductAPI.getAll();
    // console.log(id);
    const result = products
      .filter((product) => product.cateId == id)
      .map((item) => {
        return `<div class="border-gray-200 border-2 p-4 hover:border-blue-400 transition duration-200 ease-in-out">
        <div>
        <img src="${item.image}" class="mx-auto text-center" width="250px" alt="">
        </div>
        <div class="mt-2  capitalize">${item.name}</div>
        <div>
        <span class="font-bold text-red-500 text-lg">${item.price}đ</span>
        <span class="text-gray-500 line-through">${item.sale}đ</span>
        </div>
        <a href="/#/product/${item._id}">Xem chi tiết</a>

        </div>`;
      })
      .join("");
    return /*html*/ `<div class = "container w-5/6 mx-auto">
   
    <div class="grid grid-cols-4 gap-3">
    ${result}
    </div></div>`;
  },
};
export default CategoryPage;
