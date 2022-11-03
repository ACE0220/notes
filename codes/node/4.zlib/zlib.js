const zlib = require('zlib');
const fs = require('fs')
const path = require('path');
/**
 * 压缩
 */
// const gzip = zlib.createGzip();
// const inp = fs.createReadStream(path.resolve(__dirname, "./test.txt"))
// const out = fs.createWriteStream(path.resolve(__dirname, "./test.gz"))
// inp.pipe(gzip).pipe(out)

/**
 * 解压缩
 */

 const gzip = zlib.createGunzip();
 const inp = fs.createReadStream(path.resolve(__dirname, "./test.gz"))
 const out = fs.createWriteStream(path.resolve(__dirname, "./test.txt"))
 inp.pipe(gzip).pipe(out)

