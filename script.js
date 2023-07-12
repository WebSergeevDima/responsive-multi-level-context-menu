document.addEventListener('DOMContentLoaded', () => {

    const nav = `
    <ul>
        <li><a href="#" class="js-context-menu__link">Меню 1</a></li>
        <li><a href="#" class="js-context-menu__link">Меню 2</a></li>
        <li><a href="#" class="js-context-menu__link">Меню 3</a></li>
        <li>
        <a href="#" class="js-context-menu__link">Меню 4</a>
            <ul>
                    <li><a href="#" class="js-context-menu__link">Меню2 1</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню2 2</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню2 3</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню2 4</a></li>
            </ul>
        </li>
        <li><a href="#" class="js-context-menu__link">Меню 5</a></li>
        <li>
        <a href="#" class="js-context-menu__link">Меню 6</a>
         <ul>
                    <li><a href="#" class="js-context-menu__link">Меню6 1</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 2</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 3</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 4</a></li>
            </ul>
        </li>
</ul>
    `;

    document.querySelector('#contextBlock').addEventListener('contextmenu', (e) => {

        const body = document.querySelector('body');
        const contextMenu = document.createElement('nav');

        const config = {
            contextMenuWidth: 150,
            windowInnerWidth: 0,
            windowInnerHeight: 0
        }

        contextMenu.classList.add('js-context-menu');

        const clearClasses = () => {

        }

        const getWindowInners = () => {
            const windowInnerWidth = window.innerWidth;
            const windowInnerHeight = window.innerHeight;

            config.windowInnerWidth = windowInnerWidth;
            config.windowInnerHeight = windowInnerHeight;
        }

        const getPositions = ({contextMenu, x, y}) => {
            let result = {contextMenu, x, y};
            let maxRight = config.windowInnerWidth - config.contextMenuWidth;
            let maxBottom = config.windowInnerHeight - contextMenu.offsetHeight;

            if(maxRight < x) {
                result.x = x - config.contextMenuWidth;
            }

            if(maxBottom < y) {
                result.y = y - contextMenu.offsetHeight;
            }

            console.log('result', result);

            return result;
        }

        getWindowInners();

        if(document.querySelector('.js-context-menu')) {
            document.querySelector('.js-context-menu').remove();
        }

        contextMenu.innerHTML = nav;

        e.preventDefault();

        body.insertAdjacentElement('afterbegin', contextMenu);

        const x = e.clientX; // получаем координату X мыши
        const y = e.clientY; // получаем координату Y мыши


        const contextMenuContainer = getPositions({contextMenu, x, y});

        contextMenu.style.top = `${contextMenuContainer.y}px`;
        contextMenu.style.left = `${contextMenuContainer.x}px`;

        contextMenu.addEventListener('mouseover', (e) => {
            console.log(e.target);

            [...contextMenu.querySelectorAll('.active')].forEach(item => {
                item.classList.remove('active');
            });

            [...contextMenu.querySelectorAll('.show')].forEach(item => {
                item.classList.remove('show');
            });

            if(e.target.classList.contains('js-context-menu__link') && e.target.closest('li') && e.target.closest('li').querySelector('ul')) {
               // e.target.closest('li').classList.add('active');

                const subMenu = e.target.closest('li').querySelector('ul');


                subMenu.classList.add('show');

                let coord = e.target.getBoundingClientRect();
                console.log('Левый край '+coord.left);
                console.log('Верхний край '+coord.top);

            }
        }, false);

        body.addEventListener('click', (eBody) => {
            contextMenu.remove();
        });


    })


});
