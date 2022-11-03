export default () => {
    console.log('h2222222')
    const element = document.createElement('h2');
    element.textContent = "hello worl2d12";
    element.addEventListener("click", () => {
        alert("Hello webpack")
    })
    return element;
}