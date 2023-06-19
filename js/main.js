'use strict';

document.querySelector('.ads').remove();

document.querySelector('.item_three')
    .after(document.querySelector('.item_four'));

document.querySelectorAll('.item__title')[1]
    .textContent = 'This и прототипы объектов';

document.querySelectorAll('.item__image')[1]
    .after(document.querySelectorAll('.item__title')[3]);

document.querySelectorAll('.item__image')[4]
    .after(document.querySelectorAll('.item__title')[4]);

document.querySelectorAll('.item__image')[5]
    .after(document.querySelectorAll('.item__title')[1]);

document.querySelectorAll('.props__list')[3]
    .querySelectorAll('.props__item_four')[2]
    .after(document.querySelectorAll('.props__list')[1]
        .querySelector('.props__item_four'));

document.querySelectorAll('.props__list')[2]
    .before(document.querySelectorAll('.props__list')[4]);

document.querySelectorAll('.item__title')[3]
    .after(document.querySelectorAll('.props__list')[3]);

document.querySelectorAll('.props__list')[1]
    .append(document.querySelectorAll('.props__list')[5]
        .querySelectorAll('.props__item_two')[0],
    document.querySelectorAll('.props__list')[5]
        .querySelectorAll('.props__item_two')[1]);

