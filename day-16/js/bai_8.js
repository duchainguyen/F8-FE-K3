function Sn(n) {
  if (n === 1) {
    return 1;
  }
  return Sn(n - 1) + 1 / n;
}

console.log(`Giá trị của Sn =  ` + Sn(3));
