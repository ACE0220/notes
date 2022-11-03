import {compileToFunction} from './compile'

compileToFunction(`<div id="app" style="color: red;background: black">
<h1>AST语法树</h1>
<div>传入模板字符串</div>
<ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
</ul>
</div>`);
