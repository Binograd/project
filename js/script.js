$(document).ready(function () {
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        createElements: true,
        centeredSlides: true,
        centeredSlidesBounds: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
})

const phones = document.querySelectorAll('.phone');

phones.forEach(phone => {
    phone.addEventListener('click', function () {
        const el = document.createElement('textarea');
        el.value = phone.textContent;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    })
});
phones.forEach(phone => {
    let text = phone.textContent;
    phone.addEventListener('click', function () {
        if (phone.textContent === text) {
            phone.textContent = `${text} (номер скопирован в буфер обмена)`;
            setTimeout(function () {
                phone.textContent = `${text}`;
            }, 2000);
        }
    })
});