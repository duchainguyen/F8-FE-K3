function tinhtienkm(sokm) {
  var tongtien;
  if (sokm <= 1) {
    tongtien = 15000 * sokm;
  } else if (sokm > 1 && sokm <= 5) {
    tongtien = 13500 * sokm;
  } else if (sokm > 5 && sokm <= 120) {
    tongtien = 11000 * sokm;
  } else {
    tongtien = 11000 * 0.9 * sokm;
  }
  return tongtien;
}
var sokm = 130;
console.log(`đã chạy ` + `${sokm}km ` + `tiền taxi là: ` + tinhtienkm(sokm));
