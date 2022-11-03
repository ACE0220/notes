export default () => {
    const posts = document.createElement('div');
    posts.className = 'posts';
    posts.innerHTML = '<h2>I am posts</h2>'

    return posts;
}