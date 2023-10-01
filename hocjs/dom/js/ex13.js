var content = document.querySelector(".content");
console.log(content);

//children --> chỉ chọn element
// console.log(content.children);

// 2. childNodes --> trả về tất cả các nodes
// console.log(content.childNodes);

// 3. firstChild --> trả về node con đầu tiên
// 4. firstElementChild --> trả về element đầu tiên

// console.log(content.firstElementChild);

// 5. lastChild --> trả về node con cuối cùng
// 6. lastElementChild --> trả về element cuối cùng

// 7. nextElementSibling --> chọn element kế tiếp

// 8. nextSibling --> chọn node kế tiếp

// 9. previousElementSibling --> chọn element phía trước

// 10. previousSibling --> chọn node phía trước

var h1 = content.firstElementChild;
console.log(h1);

h1.previousSibling;
