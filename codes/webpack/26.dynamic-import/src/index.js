const render = () => {
    const hash = window.location.hash || "#posts";
    const mainEle = document.querySelector('.main')
    mainEle.innerHTML = ''
    if(hash === '#posts') {
        import (/* webpackChunkName:"posts" */'./posts/posts').then(({default: posts}) => {
            mainEle.appendChild(posts())
        })
    } else if(hash === '#album') {
        import (/* webpackChunkName: "album" */ './album/album').then(({default: album}) => {
            mainEle.appendChild(album())
        })
    }
}

render();

window.addEventListener("hashchange", render)