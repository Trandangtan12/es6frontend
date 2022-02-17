import userAPI from "../../api/userApi";
import { $ } from "../../utils";
const LoginPage = {
  render() {
    return /*html*/ `<form id = "form-login" class="w-1/2 mx-auto">
    <div id="err-login" class="text-red-500"></div>
        <div class="form-group">
        <label for="">Email</label>
            <input type="text" class="form-control"  name="" id="email"/>
            <div id="err-email" class="text-red-500"></div>
            </div>
            <div class="form-group">
        <label for="">Mật khẩu</label>
            <input type="password"  class="form-control" name="" id="password"/>
            <div id="err-password" class="text-red-500"></div>
            </div>
            <div class="mx-auto text-center">
            <input class="btn btn-primary btn-lg btn-block" value="Đăng nhập" type="submit">
            </div>
            <div class="mt-4">Bạn chưa đăng ký tài khoản? Hãy <a href="/#/registration" class="text-blue-500">Đăng kí tài khoản</a></div>
            </form>`;
  },
  async afterRender() {
    $("#form-login").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = $("#email").value;
      const password = $("#password").value;
      const { data } = await userAPI.getAccount(email, password);
      if (email == "") {
        $("#err-email").innerHTML = "*Bạn chưa nhập username!!!";
        return false;
      }
      if (password == "") {
        $("#err-password").innerHTML = "*Bạn chưa nhập mật khẩu!!!";
        return false;
      }
      if (data.length === 0) {
        $("#err-login").innerHTML =
          "Thông tin tài khoản không chính xác!!! Hãy nhập lại tên đăng nhập và mật khẩu!!!";
        return false;
      } else {
        data.map(({ email, token}) => {
          localStorage.setItem("email", email);
          localStorage.setItem("token", token);
          window.location.hash = "/";
        });
        console.log(data);
      }
      
    });
  },
};
export default LoginPage;
