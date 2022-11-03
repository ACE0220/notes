const { renderCall } = require("./render");

let renderFunction = new Function(`with(this){return _c("div", {id:"app",style:"color: red;"},_v(" "),_c("ul", undefined,_c("li", undefined,_v("I am li"+_s(name)))))}`);

// let renderFunction = new Function(`with({}){ return 1}`)
// console.log(renderFunction())
let vnode = renderCall(renderFunction);
