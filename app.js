window.onload = () => {
    document.querySelector('.welcome-section').classList.add('visible')
    setTimeout(() => { document.querySelector('#navbar').classList.add('visible') }, 2000)
}
let myStuff = document.querySelectorAll('.disable');
myStuff.forEach(item => item.addEventListener('contextmenu', e => e.preventDefault()))
myStuff.forEach(item => item.addEventListener('mousedown', e => e.preventDefault()))


