function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += letters[randomIndex];
  }

  return color;
}

// Sử dụng hàm để lấy một mã màu hexa ngẫu nhiên
const randomColor = getRandomHexColor();
console.log(`màu hexa: ${randomColor}`); // In ra một mã màu hexa ngẫu nhiên, ví dụ: "#1A2B3C"
