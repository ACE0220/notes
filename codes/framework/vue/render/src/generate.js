const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g

function generateCode(ast) {
    let children = getChildren(ast);
    let code = `_c("${ast.tag}", ${ast.attrs && ast.attrs.length > 0 ? `${formatProps(ast.attrs)}`: undefined}${children ? `,${children}`: ''})`;
    return code;
}

function getChildren(ast) {
    const children = ast.children;
    if(children) {
        let res =  children.map(ch => genChild(ch)).join(',')
        return res;
    }
}

function genChild(child) {
    if(child.type === 1) {
        return generateCode(child);
    } else if(child.type === 3) {
        let text = child.text;
        if(!defaultTagRE.test(text)) {
            return `_v(${JSON.stringify(text)})`
        }

        let match, index, lastIndex = defaultTagRE.lastIndex = 0, textArr = [];
        let start = 0, stop =10;
        while(match = defaultTagRE.exec(text)) {

            start += 1;
            if(start >= stop) break;

            index = match.index;
            if(index > lastIndex) {
                textArr.push(JSON.stringify(text.slice(lastIndex, index)))
            }
            textArr.push(`_s(${match[1]})`);
            lastIndex = index + match[0].length;
        }

        if(lastIndex < text.length) {
            textArr.push(JSON.stringify(text.slice(lastIndex)))
        }
        return `_v(${textArr.join('+')})`
    }
}

function formatProps(attrs) {
    let attrStr = "";
    attrs.forEach(item => {
        if(item.name === "style") {
            let styleAttrs = {}
            item.value.split(';').map(styleAttr => {
                let [key ,value] = styleAttr.split(':');
                styleAttrs[key] = value;
            })
        }
        attrStr += `${item.name}:${JSON.stringify(item.value)},`
    })
    return `{${attrStr.slice(0, -1)}}`
}

export {generateCode}