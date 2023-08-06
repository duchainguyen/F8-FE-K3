/*câu lệnh if else

cú pháp

if(diều kiện){
    // nội dung
}
else{
    // nội dung
}


// nhiều nhánh
if(điều kiện){
    // nội dung
}
else if(điều kiện){
    // nội dung
}
else if(điều kiện){
    // nội dung
}
else{
    // nội dung
}
// 


// điều kiện lồng
if(điều kiện){
    if(điều kiện){
        nội dung
    }
    else{
        nội dung
    }
}
// 




*/

// var a = 10;
// var b = 2;
// var c;
// if (b !== 0) {
//   c = a / b;
//   console.log("thương = ${c}");
// } else {
//   console.log("không tính đc ");
// }

// var luong = 4000000;
var salary = 15000000;
var thucnhat;
// luong thuc nhat = tong - thue

if (salary < 5000000) {
  thucnhat = salary - salary * 0.015;
  console.log(thucnhat);
  console.log("thuc nhat= ${thucnhat}");
} else if (salary >= 5000000 && salary <= 15000000) {
  thucnhat = salary - salary * 0.03;
  console.log("${thucnhat}");
} else {
  thucnhat = salary - salary * 0.05;
  console.log(thucnhat);
}
