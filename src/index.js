import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/product/ProductsPage.js";
import ProductDetail from "./pages/product/ProductDetail.js";
import { parseRequestUrl, $ } from "./utils.js";
import Error404Page from "./pages/Error404Page.js";
import Header from "./components/header.js";
import CategoryPage from "./pages/category/CategoryPage.js";
import ProductAddPage from "./pages/product/ProductAddPage.js";
import AdminProductPage from "./pages/admin/AdminProductPage.js";
import ProductUpdatePage from "./pages/product/ProductUpdatePage.js";
import CategoryAddPage from "./pages/category/CategoryAddPage.js";
import AdminCategoryPage from "./pages/admin/AdminCategoryPage.js";
import Card from "./pages/card.js";
import LoginPage from "./pages/user/LoginPage";
import registrationPage from "./pages/user/registrationPage";
import Footer from "./components/footer.js";
import About from "./pages/About.js";
const routes = {
  "/": HomePage,
  "/products": ProductsPage,
  "/product/:id": ProductDetail,
  "/category/:id": CategoryPage,
  "/addproduct": ProductAddPage,
  "/addcategory": CategoryAddPage,
  "/adminproduct": AdminProductPage,
  "/admincategory": AdminCategoryPage,
  "/updateproduct/:id": ProductUpdatePage,
  "/card": Card,
  "/login": LoginPage,
  "/registration": registrationPage,
  "/about": About,
};
const router = async () => {
  const { resource, id } = parseRequestUrl();
  const parseUrl = (resource ? `/${resource}` : "/") + (id ? `/:id` : "");
  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
  $("#header").innerHTML = await Header.render();
  $("#main-content").innerHTML = await page.render();
  $("#footer").innerHTML = await Footer.render();
  if (page.afterRender) {
    await page.afterRender();
  }
};
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
