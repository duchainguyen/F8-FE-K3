const serverApi = `http://localhost:3000`;
fetch(`${serverApi}/users`)
  .then((response) => {
    console.log(response);
    //đọc response header
    console.log(response.headers.get("Content-Length"));
    //lấy dữ liệu
    return response.json(); //trả về 1 promise
  })
  .then((users) => {
    const tables = document.querySelector(".table");
    console.log(users);
    tables.innerHTML = `<table >
    <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Email</th>
        <th>xem</th>
    </tr>
    ${users
      ?.map((user) => {
        return `
    <tr>
         <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td><button >xem</button></td>
      </tr>
      `;
      })
      .join("")}
    </table>`;
  });

// bài tập hiển thị danh sách lên table html
/*stt
tên
Email
*/
const getUsers = async () => {
  const response = await fetch(`&{serverApi}/users`);
  const users = await response.json();
  render(users);
};

//lưu ý khi post dữ liệu len server
/*
URL
METHOD
PUT
PATCH
-headers:{
    "content-type":"application/ json"
}
-body: dữ liệu gửi lên server
*/
