export const createH1Header = () => {
    const ele = document.createElement('h1');
    ele.textContent = "I am h1"
    document.body.appendChild(ele);
}

export const createH2Header = () => {
    const ele = document.createElement('h2');
    document.body.appendChild(ele);
}