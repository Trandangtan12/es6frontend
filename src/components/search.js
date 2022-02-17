import { $ } from "../utils";
import ProductAPI from "../api/productApi";
const search = {
  async render() {
    return /*html*/ `<form id="search" action="" class="relative col-start-2 col-span-4 self-center content-center">
      <div class="input-group">
      <input type="search" class="form-control" id="myInp" placeholder="Tìm kiếm">
      </div>
      <div id="search-list" class="absolute w-full"></div>
      </form>`;
  },
  async afterRender() {
    $("#myInp").addEventListener("keyup", async (e) => {
      e.preventDefault();
      const inp = $("#myInp").value;
      console.log(inp);
      const { data: products } = await ProductAPI.search(inp);
      if (inp == "") {
        $("#search-list").style.display = "none";
      } else {
        const searchProduct = products
          .filter((product) => product.name)
          .map((search) => {
            return /*html*/ `<ul class="list-group z-50"> 
            <a href="/#/products/${search._id}">
            <li class="z-50 list-group-item">
            <span><img src="${search.image}" class="w-20 " alt=""></span>
            ${search.name}
            </li>
            </a> </ul>`;
          })
          .join("");
        $("#search-list").style.display = "block";
        $("#search-list").innerHTML = searchProduct;
      }
    });
  },
};
export default search;
