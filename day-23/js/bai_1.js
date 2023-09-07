function calculateSum(...numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    var num = Number(numbers[i]);

    if (isNaN(num)) {
      return "Dữ liệu không hợp lệ";
    }

    sum += num;
  }

  return sum;
}

// Sử dụng hàm calculateSum
console.log(calculateSum(1, 2, 3)); // Kết quả: 6
console.log(calculateSum(5, "abc", 15, 20)); // Kết quả: 'Dữ liệu không hợp lệ'
console.log(calculateSum(2, 4, 6, 8, 10)); // Kết quả: 30
