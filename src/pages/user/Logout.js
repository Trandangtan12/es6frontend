const Logout = {
  async render() {
    return /*html*/ `<span class = "text-white inline-block mx-2"><button class="btn btn-danger" id="btn-log-out"> Đăng xuất </button></span>`;
  },
  async afterRender() {
    $("#btn-log-out").addEventListener("click", function () {
      window.location.hash = "/login";
      localStorage.removeItem("email");
    });
  },
};
export default Logout;
