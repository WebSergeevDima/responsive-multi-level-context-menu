document.addEventListener('DOMContentLoaded', () => {

    const navHTML = `
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
                    <li>
                    <a href="#" class="js-context-menu__link">Меню2 4</a>
                     <ul>
                            <li><a href="#" class="js-context-menu__link">Меню2 1</a></li>
                            <li><a href="#" class="js-context-menu__link">Меню2 2</a></li>
                            <li><a href="#" class="js-context-menu__link">Меню2 3</a></li>
                            <li><a href="#" class="js-context-menu__link">Меню2 4</a></li>
                    </ul>
                    </li>
            </ul>
        </li>
        <li><a href="#" class="js-context-menu__link">Меню 5</a></li>
        <li>
        <a href="#" class="js-context-menu__link">Меню 6</a>
         <ul>
                    <li><a href="#" class="js-context-menu__link">Меню6 1</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 2</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 3</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 4</a>
                    
                     <ul>
                    <li><a href="#" class="js-context-menu__link">Меню6 1</a>
                             <ul>
                            <li><a href="#" class="js-context-menu__link">Меню6 1</a></li>
                            <li><a href="#" class="js-context-menu__link">Меню6 2</a></li>
                            <li><a href="#" class="js-context-menu__link">Меню6 3</a></li>
                            <li><a href="#" class="js-context-menu__link">Меню6 4</a></li>
                    </ul>
                    
                    
                    </li>
                    <li><a href="#" class="js-context-menu__link">Меню6 2</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 3</a></li>
                    <li><a href="#" class="js-context-menu__link">Меню6 4</a></li>
            </ul>
                    </li>
            </ul>
        </li>
</ul>
    `;

    const navJson = {
        "menu" : [
            {
                "title" : "Меню 1",
                "href" : "www.google.com",
                "menu" : [
                    {
                        "title" : "Меню_2 1",
                        "href" : "www.google.com",
                        "menu" : [
                        ]
                    },
                    {
                        "title" : "Меню_2 2",
                        "href" : "www.google.com",
                        "menu" : [
                        ]
                    },
                    {
                        "title" : "Меню_2 3",
                        "href" : "www.google.com",
                        "menu" : [
                            {
                                "title" : "Меню_3 1",
                                "href" : "www.google.com",
                                "menu" : [
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title" : "Меню 2",
                "href" : "www.google.com",
                "menu" : [
                ]
            },
            {
                "title" : "Меню 3",
                "href" : "www.google.com",
                "menu" : [
                ]
            },
            {
                "title" : "Меню 4",
                "href" : "www.google.com",
                "menu" : [
                    {
                        "title" : "Меню_4 1",
                        "href" : "www.google.com",
                        "menu" : [
                        ]
                    },
                    {
                        "title" : "Меню_4 2",
                        "href" : "www.google.com",
                        "menu" : [
                            {
                                "title" : "Меню_4_2 1",
                                "href" : "www.google.com",
                                "menu" : [
                                ]
                            },
                            {
                                "title" : "Меню_4_2 2",
                                "href" : "www.google.com",
                                "menu" : [
                                ]
                            }
                        ]
                    },
                    {
                        "title" : "Меню_4 3",
                        "href" : "www.google.com",
                        "menu" : [
                            {
                                "title" : "Меню_4_3 1",
                                "href" : "www.google.com",
                                "menu" : [
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    ContextMenu({
        selectorElement: '#contextBlock',
        width: 150,
        nav: navJson,
        formatNav: 'JSON' // JSON || HTML; default: HTML;
    });

});
