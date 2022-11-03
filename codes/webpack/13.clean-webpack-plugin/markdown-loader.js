const marked = require("marked");
module.exports = source => {
    const html = marked.parse(source);
    return html;
}