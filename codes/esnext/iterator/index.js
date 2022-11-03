// 数组具有Symbol.iterator
const arr = [1, 2, 3, 4, 5];
// for (let key in arr) {
//   console.log(key);
// }
// for (let v of arr) {
//   console.log(v);
// }

// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const test = {
  name: "test",
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          const result = { value: this.data[index], done: false };
          index++;
          return result;
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (let v of test) {
  console.log(v);
}