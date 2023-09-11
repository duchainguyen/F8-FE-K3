function reverseInteger(number) {
  // Chuyển số nguyên thành chuỗi để có thể xử lý từng ký tự
  var strNumber = number.toString();

  // Sử dụng hàm `split`, `reverse` và `join` để đảo ngược chuỗi
  var reversedStr = strNumber.split("").reverse().join("");

  // Chuyển chuỗi đã đảo ngược thành số nguyên
  var reversedNumber = parseInt(reversedStr);

  return reversedNumber;
}

// Sử dụng hàm
var originalNumber = 12345;
var reversedNumber = reverseInteger(originalNumber);
console.log(reversedNumber); // Hiển thị 54321
