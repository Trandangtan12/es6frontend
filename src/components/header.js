import { $ } from "../utils";
import search from "./search";

const Header = {
  async render() {
    if (localStorage.getItem("email") === null) {
      return /*html*/ `
      <div class="bg-blue-400 p-2">
          <div class="w-5/6 mx-auto flex justify-between">
          <div>
              <span class = "text-white inline-block mx-2">034343434</span>
              <span class = "text-white inline-block mx-2"> tantdph12088@fpt.edu.vn</span>
              </div>
              <div>
              <span class="text-white inline-block mx-2"><a href="/#/products">Sản phẩm</a></span>
              <span class = "text-white inline-block mx-2"><a class="btn btn-danger" href="/#/login"> Đăng nhập </a></span>
              <span class = "text-white inline-block mx-2"> <a href="/#/about">về chúng tôi</a></span>
              </div>
            </div>
          
          <div class="w-5/6 mx-auto p-2 grid grid-cols-6 gap-4 lex flex flex-wrap content-center">
          <ul class="text-white self-center">
              <li class="inline-block mx-2"><a href="/"><img src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" alt="" width="150px"></a></li>
          </ul>
          
         ${await search.render()}
          <div class ="self-center flex justify-center">
          <a href="/#/card">
          <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </a> </div>
              </div>
              
              </div>`;
    } else {
      return /*html*/ `
      <div class="bg-blue-400 p-2">
          <div class="w-5/6 mx-auto flex justify-between">
          <div>
              <span class = "text-white inline-block mx-2">034343434</span>
              <span class = "text-white inline-block mx-2"> tantdph12088@fpt.edu.vn</span>
              </div>
              <div>
              <span class="text-white inline-block mx-2"><a href="/#/products">Sản phẩm</a></span>
              <span class="text-white inline-block mx-2"><a  href="/#/adminproduct">Quản trị</a></span>
              <span class = "text-white inline-block mx-2"><button class="btn btn-danger" id="btn-log-out"> Đăng xuất </button></span>
              <span class = "text-white inline-block mx-2"> <a href="/#/about">về chúng tôi</a></span>
              </div>
            </div>
          
          <div class="w-5/6 mx-auto p-2 grid grid-cols-6 gap-4 lex flex flex-wrap content-center">
          <ul class="text-white self-center">
              <li class="inline-block mx-2"><a href="/"><img src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" alt="" width="150px"></a></li>
          </ul>
          
         ${await search.render()}
          <div class ="self-center flex justify-center">
          <a href="/#/card">
          <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </a> </div>
              </div>
              
              </div>`;
    }
  },
  async afterRender() {
    if (localStorage.getItem("email") === null) {
      return `${await search.afterRender()}`;
    }
    $("#btn-log-out").addEventListener("click", async (e) => {
      e.preventDefault();
      window.location.hash = "/login";
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      // localStorage.removeItem("image");
      // localStorage.removeItem("date");
      // localStorage.removeItem("role");
      // localStorage.removeItem("name");
    });
    return `${await search.afterRender()}`;
  },
};
export default Header;
