// fetch API
//1. dữ liệu lưu ở đâu-> back-end(Database)
//2. làm sao để frontend tương tác được với backend
//-->http request - http response
/*
có 2 cơ chế:
1.client Side: giao tiếp thông qua API (backend cung cấp để frontend sử dụng)
2.server Side: Server trả trực tiếp về HTML -> request thông qua html

API là gì? application programming interface
->giao diện lập trình ứng dụng
-> tạo môi trường giao tiếp giữa các ứng dụng với nhau
+web api
+api ở hệ điều hành
+api thư viện, framework

+RESRFul API 
-URL: server URL + Patch(resource)
->https://api.fullstack.edu.vn/users
->https://api.fullstack.edu.vn/users/1/images

2.http method
-get: lấy dữ liệu
-post: thêm mới dữ liệu
-put: sửa dữ liệu (ghi đè)
-patch: sửa dữ liệu (k ghi đè)
-delete:xóa

3.ENDPOINT
URL + METHOD

GET/ users
GET/ users/{id}
POST/ users
PUT/users/{id}

4.status code

JSON là gì? là định dạng dữ liệu của kiểu chuỗi
-chuyển từ object, array,..
*/

const users = [
  { id: 1, name: "Hoàng an", email: "acb@gmail.com" },
  { id: 1, name: "Hoàng an F8", email: "acba@gmail.com" },
];

// chuyển kiểu chuỗi: đảm bảo tính toàn vẹn của dữ liệu
//hỗ trợ gần hết ngôn ngữ lập trình -->JSON hỗ trợ gần hết NN lập trình
const json = JSON.stringify(users); //chuyển mảng thành chuỗi
console.log(json);

//chuyển chuỗi về mảng(chuyển JSON về kiểu dữ liệu)
const arr = JSON.parse(json);
console.log(arr);
