function tiendien(kWh) {
  var tongtien;
  if (kWh === 0) {
    console.log(`tháng này không dùng điện`);
  } else if (kWh > 0 && kWh <= 50) {
    tongtien = 1.678 * kWh;
  } else if (kWh >= 51 && kWh <= 100) {
    tongtien = 1.734 * kWh;
  } else if (kWh >= 101 && kWh <= 200) {
    tongtien = 2.014 * kWh;
  } else if (kWh >= 201 && kWh <= 300) {
    tongtien = 2.536 * kWh;
  } else if (kWh >= 301 && kWh <= 400) {
    tongtien = 2.834 * kWh;
  } else {
    tongtien = 2.927 * kWh;
  }
  return tongtien;
}

var kWh = 20;
console.log(
  `số điện đã tiêu thụ là ` +
    `${kWh}kWm và tiền điện tháng này phải đóng là  ` +
    tiendien(kWh)
);
