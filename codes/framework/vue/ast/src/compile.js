import {parserHtmlToAst} from './parse'

function compileToFunction(html) {
    const ast = parserHtmlToAst(html);
    console.log(ast)
}

export {
    compileToFunction
}