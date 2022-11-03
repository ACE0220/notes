const Events = require("events");
const http = require("http");

let myEvents = new Events();

/**
 * 注册自定义事件
 */
// myEvents.on("my_play", (value) => {
//     console.log("监听到my_play事件，value:", value);
// })

// myEvents.emit("my_play", "我的时间")

/**
 *
 */

http.createServer((req, res) => {
  req.on("my_play", (value) => {
    console.log(value);
  });

  let content = "";
  req.on("data", (chunk) => {
    content += chunk;
  });

  req.emit("my_play", "自定义事件");

  req.on("end", () => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {"Content-Type": "text/html; charset=\"utf-8\""});
    res.write("hi" + content);
    res.end();
  });
}).listen(3000);
