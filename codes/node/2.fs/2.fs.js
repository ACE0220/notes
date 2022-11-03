const fs = require('fs');
const path = require('path')

const getPath = (fileName) => path.resolve(__dirname, fileName)

/**
 * 追加内容，如果没有就新建
 */
// fs.appendFile(getPath("./temp/demo.md"), "哈罗啊", err => {
//     console.log(err)
// })

/**
 * 重命名文件,或者文件夹
 */
// fs.rename(getPath("./temp/demo.md"), getPath("./temp/demo1.md"), err => {
//     console.log(err)
// })

/**
 * 异步获取文件
 */

// fs.readFile(getPath('./temp/demo1.md'), {}, (err, buffer) => {
//     if(err) throw err;
//     console.log(buffer.toString())
// })
// console.log('异步操作')

/**
 * 同步获取文件
 */

// try {
//     let content = fs.readFileSync(getPath('./temp/demo1.md'))
//     console.log(content.toString())
// } catch(e) {
//     console.log("catch ---------------",e)
// }
// console.log('同步读取文件')

/**
 * 写入文件
 */

// fs.writeFile(getPath('./temp/demo.md'), "hello world1", {
//     flag: 'w'
// }, err => {
//     if(err) throw err;
//     console.log("写入成功")
// })

/**
 * 判断文件夹是否存在
 */
// console.log(fs.existsSync(getPath('./temp/demo2.md')));

/**
 * mkdir/readdir
 */

// fs.mkdir(getPath('./temp/mkdirtest'), 0o777, err => {
//     if(err) throw err;
// })

// fs.readdir(getPath('./temp'), (err, files) => {
//     console.log(err);
//     console.log(files);
// })

/**
 * 判断是目录还是文件
 */
// fs.readdir(getPath('./temp'), (err, files) => {
//     files.forEach(file => {
//         const path = getPath(`./temp/${file}`);
//         fs.stat(path, (err, stats) => {
//             if(stats.isFile()) {
//                 console.log(path, "是文件")
//             } else {
//                 console.log(path, "是文件夹")
//             } 
//         })
//     })
// })

/**
 * 监听文件/取消监听文件
 */

// const file = getPath('./temp/demo.md')
// fs.watchFile(file, (curr, prev) => {
//     console.log("已修改");
// })

// setTimeout(() => {
//     fs.unwatchFile(file)
// }, 10000)

/**
 * 流式写入，适用于大文件
 */

// let ws = fs.createWriteStream(getPath('./temp/demo.md'))

// ws.write("123\n");
// ws.write("123\n");
// ws.write("123\n");
// ws.write("123\n");

// ws.close();

/**
 * 流式读取和管道读取
 */

let rs = fs.createReadStream(getPath('./temp/testimg.jpg'))
let ws = fs.createWriteStream(getPath('./temp/testimg1.jpg'))
// rs.on("data", data => {
//     ws.write(data);
//     console.log("writing")
// })
// console.log('write end')

rs.pipe(ws)

