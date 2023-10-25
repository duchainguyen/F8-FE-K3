//async await

/*
-Async: function
-await: gọi promise

*/

// const getUser = async () => {
//   return "Hoàng an";
// };
// console.log(getUser());

// getUser().then((data) => {
//   console.log(data);
// });

const getUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hoàng an");
      //   reject("error");
    }, 1000);
  });
const getUser2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("error");
      resolve("f8");
    }, 1000);
  });

// const showUser = async () => {
//   const user = await getUser();
//   console.log(user);
//   const user2 = await getUser2();
//   console.log(user2);
// };

// showUser();

// IIFE
// (async () => {
//   try {
//     // const user = await getUser();
//     // console.log(user);
//     const user2 = await getUser2();
//     console.log(user2);
//     if (user2 === undefined) {
//       throw new Error("không lấy đc giá trị");
//     }
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("hoàn thành");
//   }
// })();

const sendRequest = () => {
  return new Promise((resolve) => {
    resolve("lần 1");
  });
};
const getInfo = async () => {
  return getUser();
  return await getUser();
};

console.log(getInfo());

getInfo().then((response) => {
  console.log(response);
});
