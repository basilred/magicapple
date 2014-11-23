({
    block : 'page',
    title : 'Magic apple',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    // mods : { theme : 'islands' },
    content : [
        {
            block : 'photoslider',
            content : [
                {
                    elem : 'leftarrow'
                },
                {
                    elem : 'photo'
                },
                {
                    elem : 'rightarrow'
                }
            ]
        },
        {
            block : 'content',
            content : [
                {
                    elem : 'header',
                    content : 'Уникальный продукт'
                },
                {
                    elem : 'text',
                    content : 'MagicApple - это уникальный плод. Мы выращиваем и собираем плоды в горах Шотландии. Именно этот сорт яблок в сочетании с редким видом специально выведенного червя, является самым эффективным средством для достижения поставленной цели. Вы можете обрести любовь, похудеть или омолодиться. Именно наличие червя в яблоке является знаком качества и важной составляющей продукта, определяющего его полезные свойства.'
                }
            ]
        },
        {
            block : 'sections',
            content : [
                'Three sections'
            ]
        },
        {
            block : 'ad',
            content : [
                {
                    elem : 'header',
                    content : 'Серебрянная подвеска бесплатно'
                },
                {
                    elem : 'text',
                    content : 'При заказе пяти яблок с 1 по 8 марта 2013 года, вы получаете серебрянную подвеску Caterpillar Charm в виде червячка в подарок.'
                },
                {
                    tag : 'a',
                    content :  'Подробнее об условиях акции.'
                }
            ]
        },
        {
            block : 'footer',
            content : [
                {
                    block : 'copyrights',
                    content : [
                        {
                            elem : 'img'
                        },
                        {
                            elem : 'text',
                            content : '&copy; 2006-2012 Magic Apple.'
                        }
                    ]
                },
                {
                    block : 'call',
                    content : [
                        {
                            elem : 'text',
                            content : 'Консультации по телефону'
                        },
                        {
                            elem : 'phone',
                            content : '8 800 1000 801'
                        },
                        {
                            block : 'social',
                            // mods : { 'facebook', 'twitter' }
                        }
                    ]
                }
            ]
        }
    ]
})
