import { client } from "./client.js";
import { config } from "./config.js";
const root = document.querySelector("#root");
const btnClick = document.querySelector(".btn-clickLogin");

console.log(btnClick);

const { PAGE_LIMIT } = config;
const rootBlogs = document.querySelector("#rootBlog"); // Add # before rootBlog

const app = {
  query: {}, // Define this.query

  render: function (blogs) {
    const btnHtml = `  <div class="box">  <h3>Bài viết tổng hợp</h3>
        <button class="btn-clickLogin">login</button></div>
          `;
    const html = blogs.map(
      ({ userId, title, content }) => `
           <div class="container">
         
          <div class="article skeleton">
            <div class="Author skeleton ">
              <div class="avatar skeleton">
                <img src="https://picsum.photos/200/200" alt="" />
              </div>
              <div class="name-time">
                <span class="name skeleton">${userId.name}}</span>
                <span class="time skeleton"
                  ><i class="fa-solid fa-earth-americas"></i> 4h</span
                >
              </div>
            </div>
            <div class="info">
              <div class="title">
                <h4 class="skeleton">${title}</h4>
              </div>
              <div class="content">
                <p class="skeleton">
                  ${content}
                </p>
              </div>
            </div>
            <div class="action">
             <div class="like skeleton" id="like-button"><i class="fa-regular fa-thumbs-up"></i>Thích</div>
              <div class="comment skeleton"><i class="fa-regular fa-comment"></i>Bình Luận</div>
              <div class="share skeleton"><i class="fa-regular fa-share-from-square"></i>Chia sẻ</div>
            </div>
          </div>
        </div>
      `
    );
    rootBlogs.innerHTML = btnHtml + html.join("");
    console.log(rootBlogs);
  },

  getBlogs: async function (query = {}) {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }
    const { data: blogs } = await client.get("/blogs" + queryString);
    this.blogs = blogs.data;
    console.log(blogs);
    this.render(blogs.data);
  },
  addEvent: function () {
    rootBlogs.addEventListener("click", function (e) {
      if (e.target.classList.contains("btn-clickLogin")) {
        e.preventDefault();
        root.style.display = "block";
        rootBlogs.style.display = "none";
      }
    });
  },

  start: function () {
    this.query = {
      // Assign this.query
      _sort: "id",
      _order: "desc",
      _limit: PAGE_LIMIT,
      _page: this.currentPage, // Ensure currentPage is defined
    };

    this.getBlogs(this.query);
    this.addEvent();
  },
};

app.start();
