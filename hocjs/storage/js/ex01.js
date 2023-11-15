//Stograge -> bộ nhớ trình duyệt
// chỉ lưu trữ text
//1. localStorage
// lưu trữ k giới hạn thời gian
// localStorage.getItem(key)
// localStorage.setItem(key, value)
// localStorage.removeItem(key)
// localStorage.clear()
//2. sessionStorage
// lưu trữ k giới hạn thời gian
// sessionStorage.getItem(key)
// sessionStorage.setItem(key, value)
// sessionStorage.removeItem(key)
// sessionStorage.clear()
// lưu trữ theo phiên của trình duyệt

/*Đặc điểm chung 
- dung lượng lưu trữ lớn cookie (4-5mb)
không share được giữa các subdomain
-khớp chính xác dựa theo tên miền, giao thức , cổng 
- không phân biệt path (đường dẫn sau port)


*/
//3. cookie
//lưu trữ theo  thời gian chỉ định hoặc theo phiên
/*
dung lượng lưu trữ thấp
có thể share cho các subdomain
có thể thiết lập thời gian sống. nếu k thiết lặp thì nó là session
tránh được tấn công XSS 
khớp theo path 
an toàn hơn vì nó có httpOnly, secure
cookie tự động đính kèm vào request header khi sử dụng trình duyệt
Dễ bị tấn công CSRF
*/

// localStorage.setItem("username", "Hoàng an "); // trả về trên local
// console.log(localStorage.getItem("username"));
// localStorage.removeItem("username"); // xóa trên local
// localStorage.clear() xóa toàn bộ

// document.cookie = "username=Hoangan";

// document.cookie = `email=abc@gmail.com; path=/`;

//thời gian sống
// const expire = new Date("2023-11-15 10:00:00").toUTCString();
// console.log(expire);

// document.cookie = "username=Dauchai; expires=" + expire;

// document.cookie = "username=;expires=" + new Date().toUTCString();
// document.cookie = "username=;max-age=2";
// server --> trả về response header: set cookie

/*
res.header['Set-Cookie'] = 'username=hoangan1991;max-age=3600;httpOnly'
*/
