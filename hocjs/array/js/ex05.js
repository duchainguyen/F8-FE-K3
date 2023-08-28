// tham chiếu

var a = ["Hoàng An", "anabc@gmail.com"];

var b = a;
// console.log(b);

// copy array sang 1 địa chỉ mới
// var b = a.slice(0); //shallow copy chỉ đúng với 1 cấp

// var b = a.map(function (value) {
//   return value;
// }); //sử dụng map để copy filter and reduce

var b = JSON.parse(JSON.stringify(a)); //gọi là deep copy
//giải thích chuyển array thành json và từ json thành array
b[0] = "Hoàng An F8";

console.log(a);
console.log(b);

// Array like object
// array.from chuyển array like object sang array
function myfunction() {
  //arguments ==> array like object
  console.log(arguments);
  Array.from(arguments).forEach(function (a) {
    console.log(a);
  });
}
myfunction(5, 10, 15, 20);

// một số tình huống trả về array like object
// arguments
// HTML collection
