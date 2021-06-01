document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger'),
          close = document.querySelector('.menu__close');
          menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.add('menu__active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('menu__active');
    });

    menu.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains(close)) {
            menu.classList.remove('menu__active');
        } else {
            target = target.closest('.menu__block');
            if (!target) {
                menu.classList.remove('menu__active');
            }
        }
    });

    /*
        * Skills 
    */

    const counters = document.querySelectorAll('.skills__ratings--counter'),
        lines = document.querySelectorAll('.skills__ratings--line span');

    counters.forEach((item, i) => {
        
        lines[i].style.width = item.innerHTML;

    });

});