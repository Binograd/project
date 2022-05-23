$(document).ready(function () {
    $('.main-gallery').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
    });
});

const win_w = $(window).width();
const wowEffects = document.querySelectorAll('.wow');
const footer = document.querySelector('#footer');
if (win_w <= 600) {
    footer.innerHTML = '<a class="order-button footer" href="https://api-museum.kassy.ru/36/" target="_blank">Заказать программу</a><article class="contacts" id="Contacts"> <p>Контактная информация</p><div> <ul class="contact-us"> <li class="contact-phone"> <img alt="" src="./img/PhoneIconWhite.png"> <p>+7(8112) 29-22-60</p></li><li class="contact-adress"> <img alt="" src="./img/MapIconWhite.png"> <p>Адрес</p></li></ul> <ul class="social"> <li> <a href="https://vk.com/pskovmuseum"><img alt="" src="./img/SocialImg/ImageVK.png"></a> </li><li> <a href="https://t.me/museumpskov"><img alt="" src="./img/SocialImg/ImageTelegram.png"></a> </li><li> <a href="https://museumpskov.ru/"><img alt="" src="./img/SocialImg/ImageSite.png"></a> </li></ul> </div></article><p class="credits">© 2022 Псково-Изборский объединенный музей-заповедник</p>';
}
if (win_w <= 440) {
    wowEffects.forEach(wowElement => {
        $(wowElement).removeClass('wow');
        $(wowElement).removeClass('animate__animated');
    });
}
if (win_w > 480) {
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
}

