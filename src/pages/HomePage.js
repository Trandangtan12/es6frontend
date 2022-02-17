import CategoryAPI from "../api/categoryApi";
import ProductAPI from "../api/productApi";
import Header from "../components/header";
const HomePage = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();
    const { data: products } = await ProductAPI.getAll();
    return /*html*/ `
    <title>Trang chủ</title>
    <div class="banner container mx-auto w-5/6">
    <img src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg" alt="">
    </div>

<div class="container w-5/6 mx-auto">
    <div class = "grid grid-cols-2 gap-4 mt-4">
    <div class="border-2 hover:border-blue-400">
    <img src="https://demo-10aba.kxcdn.com/cena/wp-content/uploads/2016/01/banner1-home1-1.png" width="100%" alt="">
    </div>
    <div class = "grid grid-cols-2 gap-4">

   
    ${categories
      .map((category) => {
        return /*html*/ ` <div class = "grid grid-cols-2 gap-2 border-gray-200 border-2 p-4 hover:border-blue-400 transition duration-200 ease-in-out">
        <div>
        <a href="/#/category/${category._id}">
        
<p class="font-bold">${category.name}</p>
<ul class = "mt-2">
<li>Apple</li>
<li>Samsung</li>
<li>Xiaomi</li>
<li>Sony</li>
</ul>
</div>
<img src="${category.image}" width="300px" alt="">
</a>
</div>`;
      })
      .slice(1, 5)
      .join("")}

    

    </div>
    </div>
    
    
<div class="mt-8 mb-4 flex justify-between items-end">
    <div class=" font-bold uppercase text-2xl">Điện thoại nổi bật </div>
<div>${categories
      .filter((category) => category._id == "607bef193577703aa48be704")
      .map((itemcate) => {
        return `<a href="/#/category/${itemcate._id}">Xem tất cả ${
          products.filter(
            (product) => product.category == "607bef193577703aa48be704"
          ).length
        } ${itemcate.name} </a>`;
      })}</div>
    </div>

    <div class="grid grid-cols-4 gap-2 ">
    ${products
      .filter((product) => product.category == "607bef193577703aa48be704")
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
        <a href="/#/product/${item._id}">Xem chi tiết</a>
        </div>`;
      })
      .slice(0, 4)
      .join("")}
    </div>

    <div class="mt-8 mb-4 flex justify-between items-end">
    <div class=" font-bold uppercase text-2xl">Laptop nổi bật </div>
    <div>${categories
      .filter((category) => category._id == "607c5ab52c48d812042ed24f")
      .map((itemcate) => {
        return `<a href="/#/category/${itemcate._id}">Xem tất cả ${
          products.filter(
            (product) => product.category == "607c5ab52c48d812042ed24f"
          ).length
        } ${itemcate.name} </a>`;
      })}</div>
    </div>
  

    <div class="grid grid-cols-4 gap-2">
    ${products
      .filter((product) => product.category == "607c5ab52c48d812042ed24f")
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
        <a href="/#/product/${item._id}">Xem chi tiết</a>

        </div>`;
      })
      .slice(0, 4)
      .join("")}

    </div>

    <div class="mt-8 mb-4 flex justify-between items-end">
    <div class=" font-bold uppercase text-2xl">Phụ kiện nổi bật </div>
    <div>${categories
      .filter((category) => category._id == "607c5c122c48d812042ed251")
      .map((itemcate) => {
        return `<a href="/#/category/${itemcate._id}">Xem tất cả ${
          products.filter(
            (product) => product.category == "607c5c122c48d812042ed251"
          ).length
        } ${itemcate.name} </a>`;
      })}</div>
    </div>
    <div class="mt-8 grid grid-cols-2 gap-2">
    
    ${products
      .filter((product) => product.category == "607c5c122c48d812042ed251")
      .map((item) => {
        return /*html*/ `<div class="flex items-center border-gray-200 border-2 p-4 hover:border-blue-400 transition duration-200 ease-in-out">
        
        <div class="grid grid-cols-2 gap-2">
        <div>
        <img src="${item.image}" class="" width="250px" alt="">
        </div>
        <div>
        <div class="font-semibold capitalize">${item.name}</div>
        <div class="text-xl text-red-500 mt-2">${item.price}đ</div>
        <div class="mt-2">${item.description}</div>
        <div class="mt-2 flex justify-start">
        <button id="add-card" class=" btn btn-outline-secondary text-sm flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
        </path></svg> Add card</button>
        <button class="btn btn-outline-secondary">Mua ngay</button></div>
        <a href="/#/product/${item._id}">Xem chi tiết</a>

        </div>
        </div>
        </div>`;
      })
      .slice(0, 1)
      .join("")}

      <div class="grid grid-cols-2 gap-2">
      ${products
        .filter((product) => product.category == "607c5c122c48d812042ed251")
        .map((item) => {
          return /*html*/ `<div class="border-gray-200 border-2 p-4 hover:border-blue-400 transition duration-200 ease-in-out">
          <div>
          <img src="${item.image}" class="mx-auto text-center" width="250px" alt="">
          </div>
          <div class="mt-2 capitalize">${item.name}</div>
          <div>
        <span class="font-bold text-red-500 text-lg">${item.price}đ</span>
        <span class="text-gray-500 line-through">${item.sale}đ</span>
        </div>
        <a href="/#/product/${item._id}">Xem chi tiết</a>
          </div>`;
        })
        .slice(1, 3)
        .join("")}
  
      </div>
    </div>

    <div class="mt-8 mb-4 flex justify-between items-end">
    <div class=" font-bold uppercase text-2xl">Table nổi bật </div>
    <div>${categories
      .filter((category) => category._id == "607c5bc42c48d812042ed250")
      .map((itemcate) => {
        return `<a href="/#/category/${itemcate._id}">Xem tất cả ${
          products.filter(
            (product) => product.category == "607c5bc42c48d812042ed250"
          ).length
        } ${itemcate.name} </a>`;
      })}</div>
    </div>
  

    <div class="grid grid-cols-4 gap-2">
    ${products
      .filter((product) => product.category == "607c5bc42c48d812042ed250")
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
        <a href="/#/product/${item._id}">Xem chi tiết</a>


        </div>`;
      })
      .slice(0, 4)
      .join("")}

    </div>
    </div>
    `;
  },
  async afterRender() {
    return `${await Header.afterRender()}`;
  },
};
export default HomePage;
