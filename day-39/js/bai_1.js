import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const root = document.querySelector(".root-article");
const loadMoreMessage = document.getElementById("load-more-message"); // Assuming you have an element with this id in your HTML

const app = {
  totalPage: 0,
  currentPage: 1,
  query: {},
  order: "latest",
  render: function (blog) {
    const htmlSort = document.querySelector(".htmlSort");
    htmlSort.innerHTML = `<div class="row mb-3">
      <div class="col-3">
        <select class="form-select sort-by">
          <option value="latest" ${
            this.order === "latest" ? "selected" : ""
          }>Mới nhất</option>
          <option value="oldest" ${
            this.order === "oldest" ? "selected" : ""
          }>Cũ nhất</option>
        </select>
      </div>`;
    const html = blog.map(
      ({ name, title, content, img }) => `
           <div class="container">
          <div class="article skeleton">
            <div class="Author skeleton ">
              <div class="avatar skeleton">
                <img src=${img} alt="" />
              </div>
              <div class="name-time">
                <span class="name skeleton">${name}</span>
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
    root.innerHTML += html.join("");
  },
  addEvent() {
    root.addEventListener("change", (e) => {
      if (e.target.classList.contains("sort-by")) {
        const value = e.target.value;
        this.handleSort(value);
      }
    });
    const infinityScroll = async () => {
      const scrollTop = document.documentElement.scrollTop + window.innerHeight;
      const lastBlog = document.querySelector(
        ".root-article .container:last-child"
      );

      if (lastBlog && scrollTop > lastBlog.offsetTop + lastBlog.offsetHeight) {
        const loader = document.querySelector(".loader");
        loader.style.display = "block";
        if (this.currentPage < this.totalPage) {
          window.removeEventListener("scroll", infinityScroll);

          this.currentPage++;
          loadMoreMessage.innerHTML = `<div class="custom-loader"></div>`;

          await this.getBlogs({
            ...this.query,
            _page: this.currentPage,
          });

          loadMoreMessage.innerHTML = "";

          window.addEventListener("scroll", infinityScroll);
          loader.style.display = "none";
        } else {
          loader.style.display = "none";
        }
        const allSkeleton = document.querySelectorAll(".skeleton");
        allSkeleton.forEach((item) => {
          item.classList.remove("skeleton");
        });
      }
    };

    window.addEventListener("scroll", infinityScroll);
  },
  handleSort: function (value) {
    this.order = value;
    this.query._order = value === "latest" ? "desc" : "asc";
    this.query._sort = "id"; // Assuming your API supports sorting by the 'id' field
    this.currentPage = 1; // Reset current page when sorting
    this.getBlogs(this.query);
  },
  getBlogs: async function (query = {}) {
    try {
      let queryString = new URLSearchParams(query).toString();
      if (queryString) {
        queryString = "?" + queryString;
      }
      const { data: blog } = await client.get("/blog" + queryString);
      console.log("API Response:", blog);
      this.render(blog);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    client.get("/blog").then((response) => {
      this.totalPage = Math.ceil(response.data.length / config.PAGE_LIMIT);
      console.log("Total Pages:", this.totalPage);
    });
  },
  start: function () {
    Object.assign(this.query, {
      _sort: "id",
      _order: "desc",
      _limit: PAGE_LIMIT,
      _page: this.currentPage,
    });

    this.getBlogs(this.query);
    this.addEvent();
  },
};

app.start();
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
});
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const allSkeleton = document.querySelectorAll(".skeleton");
    const loader = document.querySelector(".loader");

    allSkeleton.forEach((item) => {
      item.classList.remove("skeleton");
      loader.style.display = "none";
    });
    console.log(allSkeleton);
  }, 3000);
});
