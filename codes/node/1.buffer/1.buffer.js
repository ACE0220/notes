/**
 * 创建基本的buffer
 */

let str = "hello"

let str1 = "你好" 

let buf = Buffer.from(str);
let buf1 = Buffer.from(str1);

console.log(buf);

console.log(buf.length)
console.log(str.length)
console.log(buf1.length)
console.log(str1.length)

// 创建指定大小的buffer
let buf10 = Buffer.alloc(10);
console.log(buf10)

let buf11 = Buffer.alloc(10, 'hello', 'utf8');
console.log(buf11)
console.log(buf.toString())

/**
 * 读取元素
 */

// 下标
let item = buf[0];
console.log('下标读取',item)

// 循环
console.log("循环读取");
buf11.forEach(element => {
    console.log(element)
});

/**
 * 添加/修改元素
 */

buf11[0] = 40;
console.log(buf11.toString())

/**
 * 创建具有敏感数据的buffer
 */

let bufUnsafe = Buffer.allocUnsafe(10);
console.log("unsafe",bufUnsafe);

/**
 * 判断是否buffer
 */

console.log(Buffer.isBuffer(buf))

/**
 * 计算包含的字节数
 */

console.log(Buffer.byteLength("str 你好"));

/**
 * concat，第一个参数是一个数组，只能是Buffer类型，第二个参数是长度
 */

const bufConcat = Buffer.concat([buf, buf1], 10);
console.log(bufConcat.toString())

/**
 * 写入数据
 */

const writeBuffer = Buffer.alloc(20);
writeBuffer.write("he");
writeBuffer.write("ll", 2);
writeBuffer.write("o", 4);
console.log("write", writeBuffer.toString())

/**
 * 分割buffer
 */
const sliceBuffer = Buffer.from("Hello");
console.log("subarray",sliceBuffer.subarray(0, 2).toString());

/**
 * toString
 */
 console.log("toString",sliceBuffer.subarray(0, 2).toString("utf8", 0, 2));

 /**
  * toJSON
  */
const bufferJsonStr = JSON.stringify(writeBuffer);
console.log("toJSON", JSON.parse(bufferJsonStr));

const reverse = Buffer.from(JSON.parse(bufferJsonStr).data)
console.log('JSONtoBuffer', reverse.toString())