function kt_SoNT(soNT) {
  if (soNT < 2) {
    return false;
  } else {
    for (var i = 2; i <= soNT - 1; i++) {
      if (soNT % i === 0) {
        return false;
      }
    }
    return true;
  }
}

var soNT = 12;
if (kt_SoNT(soNT) === true) {
  console.log(`${soNT} là số nguyên tố`);
} else {
  console.log(`${soNT} k phải là số nguyên tố`);
}
// console.log(kt_SoNT(5));
