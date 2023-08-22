// tạo mảng
var dataArray = [
  {
    title: "Tiêu đề bài viết 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat, reprehenderit tempore a quas reiciendis harum possimus aliquid. Blanditiis deserunt, recusandae cupiditate libero perferendis, et est harum, pariatur nesciunt eos nisi dicta. Cumque aperiam ipsa itaque obcaecati, iusto dolorem atque quisquam cupiditate eum impedit dolor iure culpa autem necessitatibus explicabo sed consequuntur magnam enim velit praesentium fugit? Quidem sunt illum, excepturi voluptatum, earum vel magni quas laboriosam velit labore, et aperiam libero quasi? Iste qui velit ex alias in minima repellendus, officia quisquam et perferendis, ducimus hic! Vitae harum at maxime temporibus dolorum magnam laboriosam, ratione asperiores, ipsam aliquam itaque quidem doloremque est ullam. Excepturi eius accusantium recusandae tempore accusamus fuga. Quis ipsam molestiae placeat est autem recusandae necessitatibus labore, sunt voluptatem repudiandae saepe nemo quos, omnis repellat. Minima praesentium nihil dolor sequi atque quod perferendis, dolorem porro quasi facilis corrupti laboriosam officiis accusantium provident? Dolores deleniti molestiae atque commodi? consequatur atque placeat perspiciatis necessitatibus culpa error officiis alias fuga provident obcaecati odio eligendi, eaque magni quos maiores veritatis. Impedit, enim!",
    image: "./image/john.jpg",
  },
  {
    title: "Tiêu đề bài viết 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat, reprehenderit tempore a quas reiciendis harum possimus aliquid. Blanditiis deserunt, recusandae cupiditate libero perferendis, et est harum, pariatur nesciunt eos nisi dicta. Cumque aperiam ipsa itaque obcaecati, iusto dolorem atque quisquam cupiditate eum impedit dolor iure culpa autem necessitatibus explicabo sed consequuntur magnam enim velit praesentium fugit? Quidem sunt illum, excepturi voluptatum, earum vel magni quas laboriosam velit labore, et aperiam libero quasi? Iste qui velit ex alias in minima repellendus, officia quisquam et perferendis, ducimus hic! Vitae harum at maxime temporibus dolorum magnam laboriosam, ratione asperiores, ipsam aliquam itaque quidem doloremque est ullam. Excepturi eius accusantium recusandae tempore accusamus fuga. Quis ipsam molestiae placeat est autem recusandae necessitatibus labore, sunt voluptatem repudiandae saepe nemo quos, omnis repellat. Minima praesentium nihil dolor sequi atque quod perferendis, dolorem porro quasi facilis corrupti laboriosam officiis accusantium provident? Dolores deleniti molestiae atque commodi? consequatur atque placeat perspiciatis necessitatibus culpa error officiis alias fuga provident obcaecati odio eligendi, eaque magni quos maiores veritatis. Impedit, enim!",
    image: "./image/john.jpg",
  },
  {
    title: "Tiêu đề bài viết 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat, reprehenderit tempore a quas reiciendis harum possimus aliquid. Blanditiis deserunt, recusandae cupiditate libero perferendis, et est harum, pariatur nesciunt eos nisi dicta. Cumque aperiam ipsa itaque obcaecati, iusto dolorem atque quisquam cupiditate eum impedit dolor iure culpa autem necessitatibus explicabo sed consequuntur magnam enim velit praesentium fugit? Quidem sunt illum, excepturi voluptatum, earum vel magni quas laboriosam velit labore, et aperiam libero quasi? Iste qui velit ex alias in minima repellendus, officia quisquam et perferendis, ducimus hic! Vitae harum at maxime temporibus dolorum magnam laboriosam, ratione asperiores, ipsam aliquam itaque quidem doloremque est ullam. Excepturi eius accusantium recusandae tempore accusamus fuga. Quis ipsam molestiae placeat est autem recusandae necessitatibus labore, sunt voluptatem repudiandae saepe nemo quos, omnis repellat. Minima praesentium nihil dolor sequi atque quod perferendis, dolorem porro quasi facilis corrupti laboriosam officiis accusantium provident? Dolores deleniti molestiae atque commodi? consequatur atque placeat perspiciatis necessitatibus culpa error officiis alias fuga provident obcaecati odio eligendi, eaque magni quos maiores veritatis. Impedit, enim!",
    image: "./image/john.jpg",
  },
  {
    title: "Tiêu đề bài viết 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat, reprehenderit tempore a quas reiciendis harum possimus aliquid. Blanditiis deserunt, recusandae cupiditate libero perferendis, et est harum, pariatur nesciunt eos nisi dicta. Cumque aperiam ipsa itaque obcaecati, iusto dolorem atque quisquam cupiditate eum impedit dolor iure culpa autem necessitatibus explicabo sed consequuntur magnam enim velit praesentium fugit? Quidem sunt illum, excepturi voluptatum, earum vel magni quas laboriosam velit labore, et aperiam libero quasi? Iste qui velit ex alias in minima repellendus, officia quisquam et perferendis, ducimus hic! Vitae harum at maxime temporibus dolorum magnam laboriosam, ratione asperiores, ipsam aliquam itaque quidem doloremque est ullam. Excepturi eius accusantium recusandae tempore accusamus fuga. Quis ipsam molestiae placeat est autem recusandae necessitatibus labore, sunt voluptatem repudiandae saepe nemo quos, omnis repellat. Minima praesentium nihil dolor sequi atque quod perferendis, dolorem porro quasi facilis corrupti laboriosam officiis accusantium provident? Dolores deleniti molestiae atque commodi? consequatur atque placeat perspiciatis necessitatibus culpa error officiis alias fuga provident obcaecati odio eligendi, eaque magni quos maiores veritatis. Impedit, enim!",
    image: "./image/john.jpg",
  },
];

// đưa dữ liệu ra giao diện
var dataList = document.getElementById("list-item");

function data(dataArray) {
  dataArray.forEach((data) => {
    var item = document.createElement("div");
    // div có class item
    item.classList.add("item");

    // images
    var image = document.createElement("img");
    image.src = data.image;
    item.appendChild(image);
    // end
    // thẻ h2
    const content = document.createElement("div");
    // div có class là content
    content.classList.add("content");

    var textContent = document.createElement("h2");
    textContent.textContent = ` ${data.title}`;
    content.appendChild(textContent);
    // end

    // thẻ p
    var textContent = document.createElement("p");
    textContent.textContent = ` ${data.content}`;
    content.appendChild(textContent);
    //end p

    item.appendChild(content);
    dataList.appendChild(item);
  });
}

data(dataArray);
