const MyPromise = require("./my-promise");

let mp = new MyPromise((resolve, reject) => {
  resolve("延迟了100");
});

mp.then(
  (res) => {
    return res;
  },
  (reason) => {
    console.log("reason", reason);
  }
).then((res) => {
  console.log("res 2", res);
});
