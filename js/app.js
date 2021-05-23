const menu = document.querySelector('.menu'),
        burger = document.querySelector('.header__burger'),
        nav = document.querySelectorAll('.menu__nav'),
        body = document.getElementById('body'),
        closeMenu = document.querySelector('.menu__close');

        const hideMenu = () => {
            menu.classList.remove('active');
            body.classList.remove('active');
        };

        burger.addEventListener('click', () => {
            menu.classList.add('active');
            body.classList.add('active');
        });

        nav.forEach(el => el. addEventListener('click', hideMenu));

        closeMenu.addEventListener('click', hideMenu);

