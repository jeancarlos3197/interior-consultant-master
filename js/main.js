const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header-logo');
const headerNavbar = document.querySelector('.header-navbar');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

function toggle(){
    button.addEventListener('click', function(){
        this.classList.toggle('isActive');
        wrapper.classList.toggle('isActive');
        header.classList.toggle('isActive');
        headerLogo.classList.toggle('isActive');
        headerNavbar.classList.toggle('isActive');
        ul.classList.toggle('isActive');
        main.classList.toggle('isActive');
        footer.classList.toggle('isActive');
    });
}

toggle();
