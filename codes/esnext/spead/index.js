// 将数组转换成参数序列
const st = [1, 2, 3, 4, 5];
function test() {
  console.log(arguments);
}
test(...st);

// 应用-数组合并
const nums = [1, 2, 3, 4];
const nums1 = [5, 6, 7, 8];

const res = [...nums, ...nums1];
console.log(res);

// 应用-数组克隆
const res1 = [...nums];
console.log(res1);

// 应用-伪数组转换成真数组
const divs = document.querySelectorAll("div");
const divArr = [...divs];
console.log(divArr);