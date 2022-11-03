export default () => {
    const album = document.createElement('div');
    album.className = 'album';
    album.innerHTML = '<h2>I am album</h2>'

    return album;
}