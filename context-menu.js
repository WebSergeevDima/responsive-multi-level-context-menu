const ContextMenu = (props) => {

    document.querySelector(props.selectorElement).addEventListener('contextmenu', (e) => {

        const body = document.querySelector('body');
        const contextMenu = document.createElement('nav');
        const windowInnerWidth = window.innerWidth;
        const windowInnerHeight = window.innerHeight;
        const x = e.clientX; // получаем координату X мыши
        const y = e.clientY; // получаем координату Y мыши

        const getPositions = ({contextMenu, x, y}) => {
            let result = {contextMenu, x, y};
            let maxRight = windowInnerWidth - props.width;
            let maxBottom = windowInnerHeight - contextMenu.offsetHeight;

            if(maxRight < x) {
                result.x = x - props.width;
            }

            if(maxBottom < y) {
                result.y = y - contextMenu.offsetHeight;
            }

            return result;
        }

        const getSubPositions = ({contextMenu, x, y}) => {
            let result = {contextMenu, x, y};
            let maxRight = windowInnerWidth - (props.width * 2);
            let maxBottom = windowInnerHeight - contextMenu.offsetHeight;

            if(maxRight < x) {
                result.x = -props.width;
            } else {
                result.x = props.width - 2;
            }

            if(maxBottom < y) {
                result.y = -contextMenu.offsetHeight + 32;
            } else {
                result.y = 0;
            }

            return result;
        }

        const parseNavJSON = (navJSON) => {

            let result = '';

            const getMenuLv = (menuLv) => {

                result += `<ul>`;
                menuLv.menu.forEach(item => {
                    result += `<li><a href="${item.href}" class="js-context-menu__link">${item.title}</a>`;
                    item.menu.length ? getMenuLv(item) : '';
                    result += `</li>`;
                });
                result += `</ul>`;

            };

            getMenuLv(navJSON);

            return result;
        }

        e.preventDefault();
        contextMenu.classList.add('js-context-menu');

        if(document.querySelector('.js-context-menu')) {
            document.querySelector('.js-context-menu').remove();
        }

        contextMenu.innerHTML = props.formatNav === 'JSON' ? parseNavJSON(props.nav) : props.nav;

        body.insertAdjacentElement('afterbegin', contextMenu);

        const contextMenuContainer = getPositions({contextMenu, x, y});

        contextMenu.style.top = `${contextMenuContainer.y}px`;
        contextMenu.style.left = `${contextMenuContainer.x}px`;

        contextMenu.addEventListener('mouseover', (e) => {

            if(e.target.classList.contains('js-context-menu__link')

                && e.target.closest('li')
                && e.target.closest('li').querySelector('ul')) {

                const subMenu = e.target.closest('li').querySelector('ul');

                subMenu.classList.add('show');

                let coord = e.target.getBoundingClientRect();

                const contextMenuContainer = getSubPositions({contextMenu: subMenu, x: coord.left, y: coord.top});

                subMenu.style.top = `${contextMenuContainer.y}px`;
                subMenu.style.left = `${contextMenuContainer.x}px`;

            }
        }, false);

        body.addEventListener('click', (eBody) => {
            contextMenu.remove();
        });


    });
}