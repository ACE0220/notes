const crypto = require("crypto");

/**
 * 加密
 */
let psw = "abc123";
const hash = crypto.createHash('sha1').update(psw, 'utf-8').digest('hex');
console.log(hash)