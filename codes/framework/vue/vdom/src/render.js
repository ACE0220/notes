function Render(renderFunction) {
    this.renderFunction = renderFunction;
    this.name = "ming"
    this._c = function _c() {
        console.log("_c函数被触发")
    }
    this._v = function _v() {
        console.log("_v函数被触发")
    }
    this._s = function _s() {
        console.log("_s函数被触发")
    }
    this.renderFunction.call(this)
}

function renderCall(renderFunction) {
    new Render(renderFunction);
}

export {
    renderCall
}