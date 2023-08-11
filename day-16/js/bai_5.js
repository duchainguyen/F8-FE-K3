var rows = 5;
var value = 1;
for (var i = 1; i <= rows; i++) {
  var row = "";
  for (var j = 1; j <= i; j++) {
    row += value + " ";
    value++;
  }
  console.log(row);
}
