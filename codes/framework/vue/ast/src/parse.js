
const attribute =
  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);

export function parserHtmlToAst(html) {

    let text, root, currentParent,stack = [];
    while(html) {
        let textEnd = html.indexOf("<");
        if(textEnd === 0) {
            const startTagOpenMatch = parseStartTag();
            if(startTagOpenMatch) {
                start(startTagOpenMatch.tagName, startTagOpenMatch.attrs);
                continue;
            }

            const endTagMatch = html.match(endTag);
            if(endTagMatch) {
                advance(endTagMatch[0].length);
                end(endTagMatch[1]);
                continue;
            }
        }
        
        if(textEnd > 0) {
            text = html.substring(0, textEnd);
        }
        advance(text.length);
        chars(text);
    }

    function advance(n) {
        html = html.substring(n);
    }

    function parseStartTag() {
        const start = html.match(startTagOpen);

        let end, attr;

        if(start) {
            const match = {
                tagName: start[1],
                attrs: []
            }
            advance(start[0].length);

            while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
                match.attrs.push({
                    name: attr[1],
                    value: attr[3] || attr[4] || attr[5]
                })
                advance(attr[0].length)
            } 

            if(end) {
                advance(end[0].length);
                return match;
            }

        }
    }

    function start(tagName, attrs) {
        const ele = createASTElement(tagName, attrs);
        if(!root) root = ele;
        currentParent = ele;
        stack.push(ele);
        
    }
    
    function end(tagName) {
        const ele = stack.pop();
        currentParent = stack[stack.length - 1];
        if(currentParent) {
            ele.parent = currentParent;
            currentParent.children.push(ele)
        }
    }
    
    function chars(text) {
        text = text.trim();
        currentParent.children.push({
            type: 3,
            text,
        })
    }
    
    function createASTElement(tagName, attrs) {
        return {
            tag: tagName,
            type: 1,
            children: [],
            attrs,
            parent: undefined
        }
    }

    return root;
}

