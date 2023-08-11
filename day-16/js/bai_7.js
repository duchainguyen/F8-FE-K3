for (var i = 1; i <= 10; i++) {
  document.write(`bảng cửu chương ${i}`);
  document.write("</br>");

  for (var j = 1; j <= 10; j++) {
    console.log(i + "X" + j);
    console.log("\t");
    document.write(i + "x" + j + "=" + i * j);
    document.write("\t");
  }

  document.write("</br>");
  document.write("</br>");
  document.write("</br>");

  console.log("</br>");
}
