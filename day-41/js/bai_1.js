import { client } from "./client.js";
import { config } from "./config.js";
// import { article } from "./article.js";
const rootBlog = document.querySelector("#rootBlog");
client.setUrl(config.SERVER_AUTH_API);

const root = document.querySelector("#root");
const app = {
  user: {},
  loginStatus: false,
  render: function () {
    if (this.isLogin()) {
      console.log("dasboard");
      root.innerHTML = this.dashboard();
    } else {
      root.innerHTML = this.loginForm();
      // console.log("loginform");
    }
  },
  isLogin: function () {
    return this.loginStatus;
  },
  dashboard: function (blogs) {
    return `<div class="container py-3">
      <h1>Chào mừng bạn quay trở lại</h1>
      <ul class="list-unstyled d-flex gap-2 profile">
        <li>Chào bạn: <span>Loading...</span></li>
        <li><a href="#" class="logout">Đăng xuất</a></li>
      </ul>
      <div class="articlee">
     <form id="postForm">
                    <div class="mb-3">
                        <label for="">Title</label>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Nhập tên..."
                        />
                    </div>
                    
                    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Content</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                    <div class="d-grid">
                        <button class="btn btn-primary" id="postArticle">Post</button>
                    </div>
                    <div class="msg text-danger text-center"></div>
                </form>
               <div class="articleAll">
                  <h1>Tổng hợp bài đăng</h1>
                  <div id="rootBlog"></div>
                
                </div>
              </div>
    </div>`;
  },
  loginForm: function () {
    return `<div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-7">
        <h2 class="text-center">Đăng nhập</h2>
        <form action="">
          <div class="mb-3">
            <label for="">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email..."
            />
          </div>
          <div class="mb-3">
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Password..."
            />
          </div>
          <div class="d-grid">
            <button class="btn btn-primary">Đăng nhập</button>
          </div>
          <div class="msg text-danger text-center"></div>
        </form>
        </br>
        <div class="d-grid">
             <button class="btn btn-dk btn-primary">Đăng ký</button>
          </div>
      </div>
    </div>
  </div>`;
  },
  registerForm: function () {
    return `<div class="container py-3">
        <div class="row justify-content-center">
            <div class="col-7">
                <h2 class="text-center">Đăng Ký</h2>
                <form id="registerForm">
                    <div class="mb-3">
                        <label for="">Tên</label>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Nhập tên..."
                        />
                    </div>
                    <div class="mb-3">
                        <label for="">Email</label>
                        <input
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email..."
                        />
                    </div>
                    <div class="mb-3">
                        <label for="">Password</label>
                        <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Password..."
                        />
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" id="registerBtn">Đăng Kí</button>
                    </div>
                    <div class="msg text-danger text-center"></div>
                </form>
            </div>
        </div>
    </div>`;
  },

  addEvent: function () {
    root.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = [...new FormData(e.target)];
      const data = Object.fromEntries(form);

      if (e.target.id === "registerForm") {
        this.register(data, e.target);
      }
      if (e.target.id === "postForm") {
        this.postBlogs(data, e.target);
      } else {
        this.login(data, e.target);
      }
    });
    root.addEventListener("click", (e) => {
      if (e.target.classList.contains("logout")) {
        e.preventDefault();
        this.handleLogout();
      }
      if (e.target.classList.contains("btn-dk")) {
        e.preventDefault();
        root.innerHTML = this.registerForm();
      }
      if (e.target.id === "registerBtn") {
        e.preventDefault();
        const registerForm = document.getElementById("registerForm");
        const formData = [...new FormData(registerForm)];
        const data = Object.fromEntries(formData);
        this.register(data, registerForm);
        console.log(data);
      }
      if (e.target.id === "postArticle") {
        e.preventDefault();
        const postForm = document.getElementById("postForm");

        const title = postForm.querySelector('[name="name"]').value;
        const content = postForm.querySelector(
          "#exampleFormControlTextarea1"
        ).value;

        const data = {
          name: title,
          content: content,
        };
        this.postBlogs(data, postForm);
        console.log("form", data);
      }
    });
  },

  handleLogout: function () {
    localStorage.removeItem("login_token");
    this.loginStatus = false;
    this.render();
  },
  login: async function ({ email, password }, el) {
    this.loading(el);
    const { response, data: tokens } = await client.post("/auth/login", {
      email,
      password,
    });
    // console.log(tokens.data);
    this.loading(el, false);

    if (!response.ok) {
      this.showMessage(el, "Email hoặc mật khẩu không chính xác");
      return;
    }
    // console.log("chính xác");
    this.showMessage(el, "Đăng nhập chính xác");
    this.loginStatus = true;
    // Lưu token vào storage: cookie, localStorage, sessionStorage
    localStorage.setItem(
      "login_token",
      JSON.stringify({
        access_Token: tokens.data.accessToken,
        refresh_Token: tokens.data.refreshToken,
      })
    );
    console.log(localStorage);

    // Kiểm tra xác thực và sau đó render
    await this.checkAuth();
    // this.render();
  },
  register: async function ({ name, email, password }, el) {
    try {
      const userData = {
        name,
        email,
        password,
      };

      const { data, response } = await client.post("/auth/register", userData);

      if (!response.ok) {
        this.showMessage(el, "Đăng ký không thành công. Vui lòng thử lại.");
        return;
      }
      console.log("Đki thành công:", data);
      await this.login({ email, password }, el);
    } catch (error) {
      console.error("Error during registration:", error);
      this.showMessage(el, "Đã xảy ra lỗi trong quá trình đăng ký.");
    }
  },
  postBlogs: async ({ title, content }, el) => {
    try {
      const { data, response } = await client.post("/blogs", {
        title,
        content,
      });
      console.log(data, response);

      if (!response.ok) {
        this.showMessage(el, "Lỗi");
        return;
      }
      console.log("Post thành công", data);
      el.reset();
    } catch (error) {
      this.showMessage(el, "Lỗi");
    }
  },

  showMessage: function (el, msg) {
    el.querySelector(".msg").innerText = "";
    el.querySelector(".msg").innerText = msg;
  },
  loading: function (el, status = true) {
    const btn = el.querySelector(".btn");
    const btndki = el.querySelector(".btn-dki");
    btn.innerHTML = status
      ? ` <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Loading`
      : `Đăng nhập`;
    btn.disabled = status;
  },

  checkAuth: async function () {
    if (localStorage.getItem("login_token")) {
      try {
        const { access_Token: accessToken } = JSON.parse(
          localStorage.getItem("login_token")
        );

        if (!accessToken) {
          throw new Error("Access Token Not Exists");
        }

        client.setToken(accessToken);
        const result = await client.get("/users/profile"); // Make sure this is correct
        if (!result) {
          this.handleLogout();
          return;
        }

        const { data: user } = result;
        this.loginStatus = true;
        this.user = user;

        this.render();
        this.showProfile();
      } catch (e) {
        this.loginStatus = false;
      }
    }
  },

  showProfile: async function () {
    const profile = root.querySelector(".profile span");
    const { data: user } = await client.get("/users/profile"); // Make sure this is correct
    console.log("profile", user);
    profile.innerText = `${user.data.name}`;
  },

  start: function () {
    this.render();
    this.addEvent();
    this.checkAuth();
    // this.getBlog(this.query);
    // this.showProfile();
  },
};

app.start();
