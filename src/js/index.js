require('../css/main.scss')

var elements = document.getElementsByClassName('sidebar__text')
var icons = document.getElementsByClassName('sidebar__icon')

document.getElementsByClassName('toolbox__menu-icon')[0].addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('toggle')
    document.querySelector('.main-content').classList.toggle('toggle-main')
    for(var el of elements) {
        el.classList.toggle('toggle-text')
    }

    for(var icon of icons) {
        icon.classList.toggle('toggle-icon')
    }
})

document.querySelector('.fa-bell').addEventListener('click', function() {
    document.querySelector('.toolbox__list').classList.toggle('show')
})