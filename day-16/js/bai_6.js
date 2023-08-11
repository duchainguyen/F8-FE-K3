var size = 8; // Kích thước bàn cờ
var even = " #"; // Chuỗi cho các hàng chẵn
var odd = "$ "; // Chuỗi cho các hàng lẻ
document.write("Vẽ bàn cờ ");
document.write("</br>");

for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
    if ((i + j) % 2 === 0) {
      document.write(even);
      document.write("\t");
    } else {
      document.write(odd);
    }
  }
  document.write("</br>");
}
