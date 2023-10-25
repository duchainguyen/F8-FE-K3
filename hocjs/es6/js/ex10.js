const getUsers = (userID) => {
  const users = [
    {
      id: 1,
      name: "user 1",
      salary: 39000,
    },
    {
      id: 2,
      name: "user 2",
      salary: 39000,
    },
    {
      id: 3,
      name: "user 3",
      salary: 39003,
    },
    {
      id: 4,
      name: "user 4",
      salary: 39000,
    },
  ];
  return new Promise((resolve) => {
    const user = users.find(({ id }) => id === userID);
    setInterval(() => {
      resolve(user);
    }, 1000);
  });
};

const lists = [1, 2, 2, 3, 4];
//yêu cầu tính tổng thu nhập của tất cả users có id ở trong mảng list
// let salary = 0;
// let salaryPromise = null;
// const getSalary = () => {
//   for (let index in lists) {
//     const promise = getUsers(lists[index]).then((user) => {
//       salary += user.salary;
//       return Promise.resolve(salary);
//     });
//     if (+index === lists.length - 1) {
//       return promise;
//     }
//   }
// };
// getSalary().then((salary) => {
//   console.log(salary);
// });

// để giải quyết các bài toán sử dụng nhiều promise cùng 1 lúc thì dùng
//promise.all()
// hàm này sẽ nhận một mảng chứa tất cả các promise
Promise.all(lists.map((id) => getUsers(id))).then((users) => {
  const salary = users.reduce((total, { salary }) => total + salary, 0);
  console.log(salary);
});
