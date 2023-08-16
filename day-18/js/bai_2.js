var arrA = [1, 3, 2, 5, 6, 7, 10, 11];
// var arrA = [1, 6];
// kiểm tra xem nó có phải là số ngto k
function isPrime(arrA) {
  if (arrA <= 1) {
    return false;
  }
  if (arrA <= 3) {
    return true;
  }
  if (arrA % 2 === 0 || arrA % 3 === 0) {
    return false;
  }
  for (var i = 5; i * i <= arrA; i += 6) {
    if (arrA % i === 0 || arrA % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
// hàm lưu lại các số nt
function filterPrimeNumbers(arr) {
  var arrSoNT = arr.filter(isPrime);

  return arrSoNT;
}

var arrSoNT = filterPrimeNumbers(arrA);

// kiểm tra xem trong mảng có số ngto k
if (filterPrimeNumbers(arrA).length === 0) {
  console.log("trong mảng arrA k có số nguyên tố");
} else {
  console.log(`số nguyên tố của mảng arrA là: ${arrSoNT}`);
}
// console.log(arrSoNT);

// tính tổng của mảng có chứa các số nguyên tố
var sum = 0;
for (var i = 0; i < arrSoNT.length; i++) {
  sum += arrSoNT[i];
  // console.log(sum);
}
// end

// tính trung bình của mảng
var tbArr = sum / arrSoNT.length;
//end
document.write(`Số nguyên tố trong mảng Arr là ${arrSoNT}`);
// document.write("/t");
document.write(` trung bình của mảng có chứa số nguyên tố là: ${tbArr}`);
console.log(`tổng số nguyên tố là ${sum}`);
console.log(`trung bình của mảng có chứa số nguyên tố là: ${tbArr}`);
