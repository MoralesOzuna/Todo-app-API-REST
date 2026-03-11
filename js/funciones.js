const icon = document.querySelector('.header__icon');
const body = document.body;

icon.addEventListener('click', () =>{
    body.classList.toggle('light')
})