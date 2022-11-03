import './index.css'

import createHeader from './header'

const head = createHeader();

document.body.append(head);

let lastHead = head;
module.hot.accept('./header.js', () => {
    document.body.removeChild(head);
    const newHead = createHeader();
    document.body.appendChild(newHead)
    lastHead = newHead;
})