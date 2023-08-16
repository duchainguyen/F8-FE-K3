var content =
  "Duc Hai Lorem ipsum dolor sit lorem amet consectetur, adipisicing elit. Adipisci nostrum ex dicta lorem quidem rerum nesciunt lorem , neque quasi? Dolorum similique veniam inventore illo facere recusandae harum, reiciendis reprehenderit eos? Sed autem quisquam recusandae cum debitis fuga suscipit sunt at impedit temporibus enim, tempore asperiores hic architecto exercitationem porro sint vero nobis quis, dignissimos necessitatibus optio quibusdam fugiat id. Quaerat illo expedita quas temporibus nulla, voluptatem nesciunt velit facere totam aut, porro similique qui sint non odit? Facere non facilis inventore illum. Repudiandae voluptatum facere laudantium aliquid, quidem dolores est unde. Illum, ducimus minima dignissimos totam magni enim quidem sit non voluptas.";
var keyword = "lorem";

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var result = "";
// if (position !== -1) {
//   result =
//     content.slice(0, position) +
//     `<span>${content.slice(position, position + keyword.length)}</span>` +
//     content.slice(position + keyword.length);
// }
var count = 0;
while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  // gán lại content khi cắt bỏ
  content = content.slice(position + keyword.length);
  //tìm lại với content mới và chạy lại bước trên
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  //   khi tìm đc thì nó sẽ lưu vào count
  count++;
}
result += content;
var title = `<p>tìm kiếm với từ khóa <b> ${keyword}</b> </p>`;
var bottom = `<p>đã tìm thấy <b> ${count}</b> kết quả với từ khóa <b>${keyword}</b> </p>`;

// document.write(title);
// document.write(content);
// document.write(bottom);
document.write(title + result + bottom);

// var bottom = `<p>đã tìm thấy <b>0 </b> kết quả với từ khóa <b>${keyword}</b></p>`;
