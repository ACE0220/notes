import h from './dom/h'
import patch from './dom/patch'

// let vnode2 = h("ul", {}, [
//     h('li', {}, 'a'),
//     h('li', {}, 'b'),
//     h('li', {}, 'c'),
//     h('li', {}, 'd'),
// ])
// console.log(vnode2)

let vnode1 = h("h1", {}, "hello")

let app = document.querySelector('#app');

patch(app, vnode1)