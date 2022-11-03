const { generateCode } = require("./generate")

let ast = {
    tag:"div",
    attrs: [
        {
            name:  "id",
            value: 'app'
        },
        {
            name: "style",
            value: "color: red;"
        }
    ],
    children: [
        {
            text: ' ',
            type: 3,
        },
        {
            tag: 'ul',
            type: 1,
            children: [
                {
                    tag: 'li',
                    type: 1,
                    children: [
                        {
                            text: 'I am li{{name}}',
                            type: 3
                        }
                    ]
                }
            ]
        },
    ]
}

const code = generateCode(ast);
const render = new Function(`with({name: 'ming'}){return ${code}}`);
console.log(render);