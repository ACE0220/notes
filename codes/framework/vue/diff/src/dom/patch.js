import vnode from "./vnode";
export default function patch(oldVNode, newVNode) {
    // sel属性存在虚拟dom，不存在与真实dom
    if(oldVNode.sel === undefined) {
        oldVNode = vnode(
            oldVNode.tagName.toLowerCase(),
            {},
            [],
            undefined,
            oldVNode
        )
        console.log(oldVNode)
    }

    // 先判断oldVnode和newVNode的sel
    if(oldVNode.sel === newVNode.sel) {

    } else {
        // 两个根节点完全不同,暴力替换
        let newVNodeElm = createElement(newVNode);
    }
}