import { $ } from "../../utils";
import firebase from "../../firebase";
import userAPI from "../../api/userApi";
const registrationPage = {
  render() {
    return /*html*/ `<form id = "form-registration" class="w-1/2 mx-auto">
        <div class="form-group">
        <label for="">Email</label>
            <input type="email"  class="form-control" name="" id="user-email"/>
            <div id="err-email" class="text-red-500"></div>
            </div>
            <div class="form-group">
        <label for="">Họ và tên</label>
            <input type="text"  class="form-control" name="" id="user-name"/>
            <div id="err-hoten" class="text-red-500"></div>
            </div>
            <div class="form-group">
            <label for="">Mật khẩu</label>
                <input type="password" class="form-control" name="" id="user-password"/>
            <div id="err-password" class="text-red-500"></div>
                </div>
            <div class="form-group">
            <label for="">Ngày sinh</label>
            <input type="date" class="form-control" name="" id="user-date">
            <div id="err-date" class="text-red-500"></div>
            </div>
            <div class="mx-auto text-center">
            <input class="btn btn-primary btn-lg btn-block" value="Đăng ký" type="submit">
            </div>
            </form>`;
  },
  afterRender() {
    $("#form-registration").addEventListener("submit", (e) => {
      e.preventDefault();
      if ($("#user-email").value == "") {
        $("#err-username").innerHTML = "Bạn chưa nhập username!!!";
        return false;
      }
      if ($("#user-password").value == "") {
        $("#err-password").innerHTML = "Bạn chưa nhập mật khẩu!!!";
        return false;
      }
      if ($("#user-date").value == "") {
        $("#err-date").innerHTML = "Bạn chưa nhập ngày sinh!!!";
        return false;
      }
      const user = {
        name: $("#user-name").value,
        email: $("#user-email").value,
        password: $("#user-password").value,
        date: $("#user-date").value,
      };
      userAPI.signup(user);
      window.location.hash = "/login";
    });
  },
};
export default registrationPage;
