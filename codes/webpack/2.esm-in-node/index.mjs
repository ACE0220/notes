/**
 * 测试原生模块的esm 支持情况，默认和提取成员的方式都支持
 * 
 */

// import {foo, bar} from './module.mjs'

// console.log(foo, bar)

// import fs from 'fs';
// import {writeFileSync} from 'fs';

// fs.writeFileSync('./foo.txt', "es module working");

/**
 * 测试lodash的支持情况,不支持这种提取成员的方式
 */

// import {camelCase} from "lodash";

// console.log(camelCase("Es Module"))

/**
 * 使用import 方式 导入 commonjs模块
 * 不支持提取commonjs模块的成员
 */

import commonjs from './commonjs.js'

console.log(commonjs.foo)