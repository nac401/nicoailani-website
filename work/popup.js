const container = document.querySelector('.page__container')
const fullscreen = document.querySelector('.fullscreen')
const background = document.querySelector('.fullscreen__background')

fullscreen.addEventListener('click', function() {
    container.classList.toggle('active');
    background.classList.toggle('active');
})

background.addEventListener('click', function() {
    container.classList.toggle('active');
    background.classList.toggle('active');
})