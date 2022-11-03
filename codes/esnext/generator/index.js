/**
 * 自定义iterator
 */

function makeInterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
}

// const iter = makeInterator([1, 2, 3, 4, 5]);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**
 * 在对象上自定义迭代器
 */

const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    let map = new Map();
    map.set("a", 1);
    map.set("b", 3);
    map.set("c", 2);
    let index = 0;
    return {
      next() {
        let mapEntries = [...map.entries()];
        if (index < map.size) {
          return { value: mapEntries[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

// const iter1 = obj[Symbol.iterator]();
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());

// for (let v of obj) {
//   console.log(v);
// }

/**
 * async await 异步读取文件
 */

const { readFile } = require("fs/promises");

// async function read() {
//   try {
//     let filePath = await readFile("./name.txt", "utf-8");
//     return await readFile(filePath, "utf-8");
//   } catch (e) {
//     console.log("err", e);
//   }
// }

// read().then((res) => console.log(res));

/**
 * generator + co读取文件
 */

function* read() {
  let filePath = yield readFile("./name.txt", "utf-8");
  return yield readFile(filePath, "utf-8");
}

function co(it) {
  return new Promise((resolve, reject) => {
    let next = function (data) {
      let { value, done } = it.next(data);
      if (done) {
        resolve(value);
      } else {
        Promise.resolve(value).then((res) => {
          next(res);
        });
      }
    };
    next();
  });
}

let res = co(read());
res.then((res) => {
  console.log(res, 111);
});

// const iter = read();
// let { value, done } = iter.next();
// value.then((res) => {
//   let { value, done } = iter.next(res);
//   value.then((res) => {
//     console.log(res);
//   });
// });
