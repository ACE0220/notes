import '../styles/heading.css'
export default () => {
    const element = document.createElement('h2');
    element.classList.add('heading')
    element.textContent = "hello world";
    element.addEventListener("click", () => {
        alert("Hello webpack")
    })
    return element;
}