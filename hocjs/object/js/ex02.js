var arrays = [
  {
    title: "Tiêu đề bài viết 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam labore ea, laborum laboriosam culpa, ullam, libero dolorem nam accusantium vitae doloribus corrupti! Aspernatur quam laudantium omnis corrupti! Aut rerum quam repudiandae beatae quod error repellendus reprehenderit? Vitae aut ipsam mollitia, error quisquam incidunt quidem ad nisi sunt voluptatem possimus molestias provident consectetur quibusdam saepe vero distinctio impedit tenetur culpa quia modi ea! Molestias, voluptatum laudantium? Possimus veritatis asperiores ipsam, facilis ducimus cupiditate est magni a debitis eveniet. Accusamus iure inventore, maxime nobis eligendi quia, ab officiis quam illo nostrum rerum nemo et. Dignissimos illo consequatur asperiores pariatur architecto. Illo!",
    img: "https://fastly.picsum.photos/id/952/400/400.jpg?hmac=80B_e7JwU93Jj36BhJiO82sd4uOm0LMlH_qyEjvYvkc",
  },
  {
    title: "Tiêu đề bài viết 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam labore ea, laborum laboriosam culpa, ullam, libero dolorem nam accusantium vitae doloribus corrupti! Aspernatur quam laudantium omnis corrupti! Aut rerum quam repudiandae beatae quod error repellendus reprehenderit? Vitae aut ipsam mollitia, error quisquam incidunt quidem ad nisi sunt voluptatem possimus molestias provident consectetur quibusdam saepe vero distinctio impedit tenetur culpa quia modi ea! Molestias, voluptatum laudantium? Possimus veritatis asperiores ipsam, facilis ducimus cupiditate est magni a debitis eveniet. Accusamus iure inventore, maxime nobis eligendi quia, ab officiis quam illo nostrum rerum nemo et. Dignissimos illo consequatur asperiores pariatur architecto. Illo!",
    img: "https://fastly.picsum.photos/id/952/400/400.jpg?hmac=80B_e7JwU93Jj36BhJiO82sd4uOm0LMlH_qyEjvYvkc",
  },
  {
    title: "Tiêu đề bài viết 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam labore ea, laborum laboriosam culpa, ullam, libero dolorem nam accusantium vitae doloribus corrupti! Aspernatur quam laudantium omnis corrupti! Aut rerum quam repudiandae beatae quod error repellendus reprehenderit? Vitae aut ipsam mollitia, error quisquam incidunt quidem ad nisi sunt voluptatem possimus molestias provident consectetur quibusdam saepe vero distinctio impedit tenetur culpa quia modi ea! Molestias, voluptatum laudantium? Possimus veritatis asperiores ipsam, facilis ducimus cupiditate est magni a debitis eveniet. Accusamus iure inventore, maxime nobis eligendi quia, ab officiis quam illo nostrum rerum nemo et. Dignissimos illo consequatur asperiores pariatur architecto. Illo!",
    img: "https://fastly.picsum.photos/id/952/400/400.jpg?hmac=80B_e7JwU93Jj36BhJiO82sd4uOm0LMlH_qyEjvYvkc",
  },
];
var postHTML = arrays.map(function (dataArray, index) {
  return ` <div class="item ${index % 2 !== 0 ? "item-right" : ""}">
        <img
          src = "${dataArray.img}"
          alt=""
        />
        <div class="content">
          <h2>${dataArray.title}</h2>
          <p>
            ${dataArray.content}
          </p>
        </div>
      </div>`;
});
// document.write(postHTML);

console.log(postHTML);

document.write(`<div class="container">
${postHTML.join("")}
</div>`);
// document.write(`<div class="container">
//       <div class="item">
//         <img
//           src="https://fastly.picsum.photos/id/952/400/400.jpg?hmac=80B_e7JwU93Jj36BhJiO82sd4uOm0LMlH_qyEjvYvkc"
//           alt=""
//         />
//         <div class="content">
//           <h2>Tiêu đề bài viết 1</h2>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
//             quasi sint natus et excepturi culpa esse, cum eveniet, distinctio
//             iusto porro velit nihil. Sunt vitae eius aliquam ipsam sequi
//             temporibus est, esse fugiat rem omnis asperiores eveniet nobis, quia
//             ipsa corporis tenetur numquam eaque nemo. Minus consequuntur commodi
//             itaque autem quam officia nihil fugit numquam quos doloremque ex,
//             dolores repellat labore fugiat totam consectetur illum reprehenderit
//             animi, nesciunt tempora! Placeat omnis quisquam nihil quos et iure
//             dolores deserunt nisi facilis ad nam reiciendis, totam quo,
//             temporibus inventore, non minima veniam nesciunt magnam. Corrupti,
//             adipisci ad dolorum in tempore atque unde!
//           </p>
//         </div>
//       </div>
//       <div class="item">
//         <img
//           src="https://fastly.picsum.photos/id/952/400/400.jpg?hmac=80B_e7JwU93Jj36BhJiO82sd4uOm0LMlH_qyEjvYvkc"
//           alt=""
//         />
//         <div class="content">
//           <h2>Tiêu đề bài viết 1</h2>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
//             quasi sint natus et excepturi culpa esse, cum eveniet, distinctio
//             iusto porro velit nihil. Sunt vitae eius aliquam ipsam sequi
//             temporibus est, esse fugiat rem omnis asperiores eveniet nobis, quia
//             ipsa corporis tenetur numquam eaque nemo. Minus consequuntur commodi
//             itaque autem quam officia nihil fugit numquam quos doloremque ex,
//             dolores repellat labore fugiat totam consectetur illum reprehenderit
//             animi, nesciunt tempora! Placeat omnis quisquam nihil quos et iure
//             dolores deserunt nisi facilis ad nam reiciendis, totam quo,
//             temporibus inventore, non minima veniam nesciunt magnam. Corrupti,
//             adipisci ad dolorum in tempore atque unde!
//           </p>
//         </div>
//       </div>
//       <div class="item">
//         <img
//           src="https://fastly.picsum.photos/id/952/400/400.jpg?hmac=80B_e7JwU93Jj36BhJiO82sd4uOm0LMlH_qyEjvYvkc"
//           alt=""
//         />
//         <div class="content">
//           <h2>Tiêu đề bài viết 1</h2>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
//             quasi sint natus et excepturi culpa esse, cum eveniet, distinctio
//             iusto porro velit nihil. Sunt vitae eius aliquam ipsam sequi
//             temporibus est, esse fugiat rem omnis asperiores eveniet nobis, quia
//             ipsa corporis tenetur numquam eaque nemo. Minus consequuntur commodi
//             itaque autem quam officia nihil fugit numquam quos doloremque ex,
//             dolores repellat labore fugiat totam consectetur illum reprehenderit
//             animi, nesciunt tempora! Placeat omnis quisquam nihil quos et iure
//             dolores deserunt nisi facilis ad nam reiciendis, totam quo,
//             temporibus inventore, non minima veniam nesciunt magnam. Corrupti,
//             adipisci ad dolorum in tempore atque unde!
//           </p>
//         </div>
//       </div>
//     </div>`);
