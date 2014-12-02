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
                    elem : 'leftarrow',
                    content : '<'
                },
                {
                    block : 'image',
                    mix : { block : 'photoslider', elem : 'photo' }
                },
                {
                    elem : 'rightarrow',
                    content : '>'
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
                {
                    elem : 'section',
                    content : [
                        {
                            block : 'image',
                            mix : { block : 'sections', elem : 'image' },
                            url : '../../desktop.blocks/sections/love.png'
                        },
                        {
                            elem : 'description',
                            content : [
                                {
                                    elem : 'caption',
                                    tag : 'h3',
                                    content : 'Любовь'
                                },
                                {
                                    elem : 'text',
                                    tag : 'p',
                                    content : 'Покорите сердце любимого человека!'
                                },
                                {
                                    block : 'button',
                                    text : 'Купить'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'section',
                    content : [
                        {
                            block : 'image',
                            mix : { block : 'sections', elem : 'image' },
                            url : '../../desktop.blocks/sections/fitness.png'
                        },
                        {
                            elem : 'description',
                            content : [
                                {
                                    elem : 'caption',
                                    tag : 'h3',
                                    content : 'Похудение'
                                },
                                {
                                    elem : 'text',
                                    tag : 'p',
                                    content : 'Держите себя в форме и будьте красивыми'
                                },
                                {
                                    block : 'button',
                                    text : 'Купить'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'section',
                    content : [
                        {
                            block : 'image',
                            mix : { block : 'sections', elem : 'image' },
                            url : '../../desktop.blocks/sections/youth.png'
                        },
                        {
                            elem : 'description',
                            content : [
                                {
                                    elem : 'caption',
                                    tag : 'h3',
                                    content : 'Молодость'
                                },
                                {
                                    elem : 'text',
                                    tag : 'p',
                                    content : 'Станьте моложе и привлекательнее'
                                },
                                {
                                    block : 'button',
                                    text : 'Купить'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'ad',
            content : [
                {
                    elem : 'image',
                    content : {
                        block : 'image',
                        url : '../../desktop.blocks/ad/advert.png'
                    }
                },
                {
                    block : 'desc',
                    mix : { block : 'ad', elem : 'desc' },
                    content : [
                        {
                            elem : 'header',
                            mix : { block : 'ad', elem : 'header' },
                            content : 'Серебрянная подвеска бесплатно'
                        },
                        {
                            elem : 'text',
                            mix : { block : 'ad', elem : 'text' },
                            content : 'При заказе пяти яблок с 1 по 8 марта 2013 года, вы получаете серебрянную подвеску Caterpillar Charm в виде червячка в подарок. <a>Подробнее об условиях акции.</a>'
                        }
                    ]
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
                            block : 'image',
                            mix : { block : 'copyrights', elem : 'image' },
                            url : '../../desktop.blocks/copyrights/copyrights.png'
                        },
                        {
                            elem : 'text',
                            content : '@ 2006-2012 MagicApple Store.'
                        },
                        {
                            elem : 'design',
                            content : 'design by Centroarts.com'
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
