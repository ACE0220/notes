const http = require("http");
const path = require("path");
const fs = require("fs");

/**
 * 创建服务器实例
 */
// const app = http.createServer((req, res) => {
//     // 设置响应头
//     res.writeHead(200, {
//         "content-type": 'text/html; charset="utf-8"'
//     })
//     // 返回给客户端
//     res.write("hello, 你好")
//     // 结束响应
//     res.end();
// }).listen(3000);

// console.log('运行在3000端口')

/**
 * 处理不同的请求
 */

// const app = http.createServer((req, res) => {
//     let url = req.url;
//     if(url === '/') {
//         fs.readFile(path.resolve(__dirname, './index.html'), (err,data) => {
//             if(err) throw err;
//             res.writeHead(200, {"content-type": 'text/html; charset="utf-8"'});
//             res.end(data);
//         })
//     }
//     else if(url === '/user') {
//         fs.readFile(path.resolve(__dirname, './user.html'), (err,data) => {
//             if(err) throw err;
//             res.writeHead(200, {"content-type": 'text/html; charset="utf-8"'});
//             res.end(data);
//         })
//     }
// }).listen(3000);

// console.log('运行在3000端口')

/**
 * 抽取公共功能
 */

function getHtml(res, fileName) {
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // console.log(err)
    }
    res.writeHead(200, { "content-type": 'text/html; charset="utf-8"' });
    res.end(data);
  });
}
// const app = http
//   .createServer((req, res) => {
//     let url = req.url;
//     let fileName = "";
//     if (url === "/") {
//       fileName = "./index.html";
//     } else if (url === "/user") {
//       fileName = "./user.html";
//     }
//     if (req.url !== "favicon.ico") {
//       getHtml(res, fileName);
//     }
//   })
//   .listen(3000);

// console.log('运行在3000端口')

/**
 * get参数请求处理
 */

//  function splitUrl(data) {
//     console.log(data)
//     let obj = {}
//     const result = data.split('?')[1].split("&").map(item => {
//         let [key, value] = item.split('=');
//         obj[key] = value;
//     })
//     return obj;
// }

//  const app = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     let url = req.url;
//     let fileName = "";
//     if(url === "/get") {
//         fileName = "./get.html";
//         getHtml(res, fileName)
//     } else if(url){
//         res.end(JSON.stringify(splitUrl(url)))
//     }
// }).listen(3000);

/**
 * post请求处理
 */

 const app = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    let content = "";
    req.on("data", chunk => {
        content += chunk
    })
    req.on("end", () =>{
        res.writeHead(200, {"Content-Type": 'text/html; charset="utf-8"'})
        res.write(content)
        res.end()
    })
    
}).listen(3000);
